<?php
/**
 * Mailjet Email Sender Script for Leila Pet Care
 * This script handles the backend part of the contact form with security enhancements.
 * Based on Mailjet Send API v3.1: https://dev.mailjet.com/email/guides/send-api-v31/
 */

// --- SECURITY CONFIGURATION ---
// Only allow requests from your own domain (Replace with your actual domain in production)
// header("Access-Control-Allow-Origin: https://leilapetcare.hu");

// Security Headers
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header('Content-Type: application/json; charset=UTF-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Módszer nem engedélyezett.']);
    exit;
}

// --- CONFIGURATION ---
// Mailjet API Credentials - TO BE FILLED BY USER
$apiKey = '561961af822db7bad358a3c05e8a2e47';
$apiSecret = '10ccfd44073983456e358a90542330c2';

// reCAPTCHA Secret Key - TO BE FILLED BY USER
$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';

// Recipient Information
$toEmail = 'info@leilapetcare.hu';
$toName = 'Dorka - Leila Pet Care';

// --- DATA COLLECTION & SANITIZATION ---
$name = isset($_POST['name']) ? filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS) : null;
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : null;
$phone = isset($_POST['phone']) ? filter_var($_POST['phone'], FILTER_SANITIZE_SPECIAL_CHARS) : null;
$service = isset($_POST['service']) ? filter_var($_POST['service'], FILTER_SANITIZE_SPECIAL_CHARS) : null;
$location = isset($_POST['location']) ? filter_var($_POST['location'], FILTER_SANITIZE_SPECIAL_CHARS) : null;
$time = isset($_POST['time']) ? filter_var($_POST['time'], FILTER_SANITIZE_SPECIAL_CHARS) : null;
$details = isset($_POST['details']) ? filter_var($_POST['details'], FILTER_SANITIZE_SPECIAL_CHARS) : null;

// --- VALIDATION ---
if (!$name || !$email || !$service) {
    http_response_code(400);
    echo json_encode(['error' => 'Kérjük, töltse ki az összes kötelező mezőt!']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Érvénytelen e-mail cím!']);
    exit;
}

// --- MAILJET PREPARATION ---
$mailData = [
    'Messages' => [
        [
            'From' => [
                'Email' => $toEmail, // Must be a validated sender in Mailjet
                'Name' => "Leila Pet Care Weboldal"
            ],
            'To' => [
                [
                    'Email' => $toEmail,
                    'Name' => $toName
                ]
            ],
            'ReplyTo' => [
                'Email' => $email,
                'Name' => $name
            ],
            'Subject' => "Új ajánlatkérés: " . $service,
            'TextPart' => "Új ajánlatkérés érkezett.\nNév: {$name}\nE-mail: {$email}\nTelefon: {$phone}\nSzolgáltatás: {$service}\nHelyszín: {$location}\nIdőpont: {$time}\nRészletek: {$details}",
            'HTMLPart' => "
                <h3>Új üzenet érkezett a weboldalról:</h3>
                <p><b>Név:</b> {$name}</p>
                <p><b>E-mail:</b> {$email}</p>
                <p><b>Telefon:</b> {$phone}</p>
                <hr>
                <p><b>Választott szolgáltatás:</b> {$service}</p>
                <p><b>Helyszín:</b> {$location}</p>
                <p><b>Időpont:</b> {$time}</p>
                <p><b>Részletek:</b><br>" . nl2br($details) . "</p>
            "
        ]
    ]
];

// --- SENDING VIA MAILJET API ---
$ch = curl_init('https://api.mailjet.com/v3.1/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($mailData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Basic ' . base64_encode($apiKey . ':' . $apiSecret)
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo json_encode(['success' => true, 'message' => 'Üzenet sikeresen elküldve!']);
} else {
    http_response_code(500);
    error_log("Mailjet Error (" . $httpCode . "): " . $response);
    
    // Részletesebb hibaüzenet összeállítása
    $errorDetails = json_decode($response, true);
    $errorMessage = 'Hiba történt az üzenet küldése közben.';
    
    if (isset($errorDetails['Messages'][0]['Errors'])) {
        $errors = [];
        foreach ($errorDetails['Messages'][0]['Errors'] as $err) {
            $errors[] = $err['ErrorMessage'];
        }
        if (!empty($errors)) {
            $errorMessage .= ' Részletek: ' . implode(', ', $errors);
        }
    } elseif (isset($errorDetails['ErrorMessage'])) {
        $errorMessage .= ' Részletek: ' . $errorDetails['ErrorMessage'];
    }

    echo json_encode(['error' => $errorMessage]);
}

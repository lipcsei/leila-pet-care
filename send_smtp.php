<?php
/**
 * SMTP Email Sender Script for Leila Pet Care
 * Ez a szkript a szerver saját SMTP szerverét vagy a PHP mail() függvényét használja.
 */

// Security Headers
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header('Content-Type: application/json; charset=UTF-8');

// Csak POST kérések engedélyezettek
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Módszer nem engedélyezett.']);
    exit;
}

// --- CONFIGURATION ---
// Címzett adatai
$toEmail = 'info@leilapetcare.hu';
$toName = 'Dorka - Leila Pet Care';

// Feladó adatai (érdemes a szerver saját domainjéhez tartozó címet használni)
$fromEmail = 'info@leilapetcare.hu';
$fromName = 'Leila Pet Care Weboldal';

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

// --- EMAIL CONTENT PREPARATION ---
$subject = "Új ajánlatkérés (SMTP): " . $service;

// HTML tartalom összeállítása
$message = "
<html>
<head>
    <title>Új ajánlatkérés</title>
</head>
<body>
    <h3>Új üzenet érkezett a weboldalról:</h3>
    <p><b>Név:</b> {$name}</p>
    <p><b>E-mail:</b> {$email}</p>
    <p><b>Telefon:</b> {$phone}</p>
    <hr>
    <p><b>Választott szolgáltatás:</b> {$service}</p>
    <p><b>Helyszín:</b> {$location}</p>
    <p><b>Időpont:</b> {$time}</p>
    <p><b>Részletek:</b><br>" . nl2br($details) . "</p>
</body>
</html>
";

// Fejlécek beállítása a HTML e-mailhez és a feladóhoz
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$fromName} <{$fromEmail}>" . "\r\n";
$headers .= "Reply-To: {$name} <{$email}>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// --- SENDING ---
// A PHP mail() függvénye a php.ini-ben beállított SMTP szervert használja.
// cPanel esetén ez általában automatikusan konfigurálva van a helyi SMTP-re.
if (mail($toEmail, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Üzenet sikeresen elküldve (SMTP)!']);
} else {
    http_response_code(500);
    error_log("Helyi mail() küldési hiba a következő címre: " . $toEmail);
    echo json_encode(['error' => 'Hiba történt az üzenet küldése közben a szerveren.']);
}

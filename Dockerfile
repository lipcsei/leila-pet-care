FROM php:8.2-apache

# Szükséges PHP kiterjesztések telepítése (curl a Mailjet-hez)
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    pkg-config \
    libssl-dev \
    && docker-php-ext-install curl

# Apache rewrite modul engedélyezése (opcionális, de hasznos)
RUN a2enmod rewrite

# Munkakönyvtár beállítása
WORKDIR /var/www/html

# Fájlok másolása (docker-compose használata esetén ez felülírható volume-mal)
COPY . /var/www/html/

# Jogosultságok beállítása
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

<?php
// Datenbank Konfiguration
define('DB_PATH', __DIR__ . '/data/booking.db');

// Sicherstellen, dass der data-Ordner existiert
if (!is_dir(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}

// Admin Login Credentials (Ändern Sie diese!)
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'admin123');

// Zeitzone einstellen
date_default_timezone_set('Europe/Berlin');
?>

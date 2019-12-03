<?php
$contraseña = "";
$usuario = "root";
$nombre_base_de_datos = "mascotas";
try {
    $bd = new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
    $bd->query("set names utf8;");
    $bd->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $bd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $bd;
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
    return null;
}

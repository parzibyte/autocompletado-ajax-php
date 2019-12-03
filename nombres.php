<?php
// Si no hay búsqueda, mostrar un arreglo vacío y salir
if (empty($_GET["busqueda"])) {
    echo "[]";
    exit;
}
$bd = include_once "bd.php";
$busqueda = $_GET["busqueda"];
$sentencia = $bd->prepare("select * from mascotas where nombre like ?");
$sentencia->execute(["%$busqueda%"]);
$mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($mascotas);

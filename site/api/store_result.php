<?php

header('Content-type: text/plain; charset=utf-8');
require_once('constants.php');

if (!isset($_GET['id']) || !isset($_GET['answers']) || !isset($_GET['percentages'])) {
    http_response_code(400);
    die();
}

$conn = new mysqli(DT_SQL_SERVER, DT_SQL_USER, DT_SQL_PASS, DT_SQL_DATABASE);

$stmt = $conn->prepare(SQL_INSERT_RESULT);
$stmt->bind_param('isss', $_GET['id'], $_SERVER['REMOTE_ADDR'], $_GET['answers'], $_GET['percentages']);
$valid = $stmt->execute();
$stmt->close();

$conn->close();

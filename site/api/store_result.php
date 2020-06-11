<?php

header('Content-type: text/plain; charset=utf-8');
require_once('constants.php');

if (!isset($_GET['id']) || !isset($_GET['answers']) || !isset($_GET['percentages']) || !isset($_GET['survey'])) {
    http_response_code(400);
    die();
}

if (DEV) {
    $conn = new mysqli(DEV_DT_SQL_SERVER, DEV_DT_SQL_USER, DEV_DT_SQL_PASS, DEV_DT_SQL_DATABASE);
} else {
    $conn = new mysqli(LIVE_DT_SQL_SERVER, LIVE_DT_SQL_USER, LIVE_DT_SQL_PASS, LIVE_DT_SQL_DATABASE);
}

$stmt = $conn->prepare(SQL_INSERT_RESULT);
$stmt->bind_param('issss', $_GET['id'], $_SERVER['REMOTE_ADDR'], $_GET['answers'], $_GET['percentages'], $_GET['survey']);
$valid = $stmt->execute();
$stmt->close();

$conn->close();

<?php 

require_once "controllers/Controller.php";


$controller = new Controller;
$controller->form();
$controller->affichageTask();



if (isset($_POST['submit'])){
    $controller->addTask();
}

if (isset($_GET['type']) && $_GET['type'] == "supprimer") {
    $controller->deleteTask();
    header("Location: http://localhost/task/");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de tâches</title>
</head>
<body>
    <script src="script/script.js"></script>
</body>
</html>
<?php 
    $pdo = new PDO('mysql:host=localhost;dbname=task', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $updateTask = $_POST['updateTask'];
    $updateId = $_POST['updateId'];

    $sqlUpdate = "UPDATE `task` SET `task`= :updateTask WHERE id = :updateId";
    $stmtUpdate = $pdo->prepare($sqlUpdate);
    $stmtUpdate->bindParam(':updateTask', $updateTask, PDO::PARAM_STR);
    $stmtUpdate->bindParam(':updateId', $updateId, PDO::PARAM_INT);
    $stmtUpdate->execute();

?>

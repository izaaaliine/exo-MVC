<?php 

require_once "models/BddConnect.php";

class Controller {

    function form(){
        require_once "views/form.php";
    }

    function affichageTask(){
        $conn = new BddConnect;
        $data = $conn->readAll();
        require_once "views/tableau.php";
    }
    function addTask(){
        $conn = new BddConnect;
        $conn->insertBdd($_POST['task']);
    }
    function deleteTask(){
        $deleteIdTask = htmlspecialchars($_POST["idTask"]);
        $conn = new BddConnect;
        $conn->delete($deleteIdTask);
    }
}


?>


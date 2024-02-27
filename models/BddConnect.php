<?php 

class BddConnect{
    public $connexion;
    public function __construct() {
        $dsn = "mysql:host=localhost;dbname=task";
        $username = "root";
        $password = "";
        $this->connexion = new PDO($dsn, $username, $password);
        $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo "vous êtes connecté à la bdd";
    }

    function readAll(){
        $sql = "SELECT * FROM `task`";
        $request = $this->connexion->query($sql);
        return $request->fetchAll(PDO::FETCH_ASSOC);
    }

    function insertBdd($param1){
        $sql = "INSERT INTO `task`(`task`) VALUES ('$param1')";
        $this->connexion->query($sql);
        echo "data bien ajouté à la bdd";
        echo '<br>';
    }

    function delete($deleteIdTask){
    $sqlDelete = "DELETE FROM `task` WHERE id = $deleteIdTask";
    $stmtDelete = $this->connexion->prepare($sqlDelete);
    $stmtDelete->execute();
    echo "Données supprimées";
    }

}



?>
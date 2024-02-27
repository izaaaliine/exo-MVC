
<table border ="1">
                    <thead>
                        <tr>
                            <th style="display: none;">Id</th>
                            <th>Nom de la tâche</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
    <tbody>
            <?php 

                foreach ($data as $value): ?>
                        <tr>
                            <td style="display: none;"><?= $value['id']; ?></td>
                            <td><?= $value['task']; ?></td>
                            <td>
                                <form method="POST" id="myForm"> 
                                    <button type="submit" class="modifierBtn">Modifier</button>            
                                </form>
                            </td>
                            <td>
                                <form method="POST" action="?page=role&type=supprimer" id="deleteForm">
                                    <input type="hidden" name="idTask" value="<?= $value['id']; ?>">
                                    <button type="submit">Supprimer</button>
                                </form>
                            </td>
                        </tr>
            <?php endforeach; ?>
    </tbody>
</table>
document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  table.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON' && target.textContent === 'Modifier') {
      event.preventDefault();
      const row = target.closest('tr');
      //   ajout input dans form
      const taskCell = row.querySelector('td:nth-child(2)');
      //   recupère la value de l'id dans la BDD
      const taskId = row.querySelector('td:nth-child(1)').textContent.trim();
      // récupère le nom de la tâche
      const taskName = taskCell.textContent.trim();
      // création form en méthode post
      const form = document.createElement('form');
      form.method = 'POST';
      form.classList.add('formUpdate');
      // création input pour modifier la task
      const inputTask = document.createElement('input');
      inputTask.type = 'text';
      inputTask.value = taskName;
      inputTask.name = 'updateTask';
      // création input type hidden avec l'id
      const inputId = document.createElement('input');
      inputId.type = 'hidden';
      inputId.name = 'updateId';
      inputId.value = taskId;
      // création input enregistrer
      const enregistrerBtn = document.createElement('input');
      enregistrerBtn.type = 'submit';
      enregistrerBtn.name = 'enregistrerBtn';
      enregistrerBtn.value = 'Enregistrer';
      enregistrerBtn.classList.add('enregistrerBtn');

      // Ajouter le bouton "Enregistrer" au formulaire
      form.appendChild(inputTask);
      form.appendChild(inputId);
      form.appendChild(enregistrerBtn);
      taskCell.textContent = '';
      taskCell.appendChild(form);

      // requête ajax pour modifier en BDD
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        fetch('http/post.php', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erreur lors de la requête.');
            }
            console.log('Données modifiées avec succès');
          })
          .catch((error) => {
            console.error('Erreur :', error);
          });
      });
    }
  });
});

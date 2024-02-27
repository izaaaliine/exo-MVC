document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  table.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON' && target.textContent === 'Modifier') {
      event.preventDefault(); // Empêcher le formulaire de se recharger lorsque le bouton est "Modifier"

      const row = target.closest('tr');
      const taskCell = row.querySelector('td:nth-child(2)');
      const taskId = row.querySelector('td:nth-child(1)').textContent.trim();
      console.log(taskId);
      const taskName = taskCell.textContent.trim();

      const form = document.createElement('form');
      form.method = 'POST';
      form.classList.add('formUpdate');

      const inputTask = document.createElement('input');
      inputTask.type = 'text';
      inputTask.value = taskName;
      inputTask.name = 'updateTask';

      const inputId = document.createElement('input');
      inputId.type = 'hidden';
      inputId.name = 'updateId';
      inputId.value = taskId;

      const enregistrerBtn = document.createElement('input');
      enregistrerBtn.type = 'submit';
      enregistrerBtn.name = 'enregistrerBtn';
      enregistrerBtn.value = 'Enregistrer';
      enregistrerBtn.classList.add('enregistrerBtn');

      form.appendChild(inputTask);
      form.appendChild(inputId);
      form.appendChild(enregistrerBtn); // Ajouter le bouton "Enregistrer" au formulaire

      taskCell.textContent = '';
      taskCell.appendChild(form);

      // Soumettre le formulaire lorsque le bouton "Modifier" est cliqué
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

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
            // Effectuez d'autres actions si nécessaire
          })
          .catch((error) => {
            console.error('Erreur :', error);
          });
      });
    }
  });
});

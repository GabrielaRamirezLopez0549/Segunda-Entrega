const form = document.getElementById('miFormulario');
const successAlert = document.getElementById('successAlert');

(() => {
    'use strict'
  
    
    const forms = document.querySelectorAll('.needs-validation')
  

    Array.from(forms).forEach(form => {
        
      form.addEventListener('submit', event => {

          // Evita que el formulario se envíe automáticamente
          event.preventDefault();

        if (form.checkValidity()) {
            successAlert.style.display = 'block'; // Muestra la alerta
            setTimeout(() => {
                successAlert.style.display = 'none'; // Oculta la alerta después de 3 segundos
            }, 3000);
              // Da un pequeño retraso antes de resetear el formulario para que la validación visual se muestre correctamente
              setTimeout(() => {
                form.reset(); // Restablece el formulario
                form.classList.remove('was-validated'); // Elimina la clase 'was-validated' tras el reset
            }, 1);
          
        } else{
            event.preventDefault()
            event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      })
    })
  })()
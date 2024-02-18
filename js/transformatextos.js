      // Accedo a los elementos del formulario
      var campoTexto = document.getElementById('texto');
      var campoResultado = document.getElementById('resultado');
      let btnPrimeraLetra = document.getElementById('primera');
      let btnMayuscula = document.getElementById('mayuscula');
      let btnMinuscula = document.getElementById('minuscula');
      let btnLimpiar = document.getElementById('limpiar');

      // Hago funciones

      // 1- Capitalizar la primera letra
      function capitalizarPrimeraLetra() {
        // Compruebo si no hay nada escrito en el textarea
        if (campoTexto.value.length == 0) {
          alert('¡ERROR!: NO HAY TEXTO PARA CONVERTIR');
          campoResultado.innerText = ' '; // Borrar el campo Resultado
        } else {
          // Almaceno el valor del textarea en una variable
          let valorTexto = campoTexto.value;

          let frase = valorTexto.split(' ');
          for (let i = 0; i < frase.length; i++) {
            frase[i] = frase[i][0].toUpperCase() + frase[i].substr(1).toLowerCase();
            
        }
        
          campoResultado.innerText = frase.join(' ');
        }
      }
      btnPrimeraLetra.addEventListener('click', capitalizarPrimeraLetra);

      function convertirMayusculas() {
        if (campoTexto.value == 0) {
          alert('¡ERROR!: NO HAY TEXTO PARA CONVERTIR');
          campoResultado.innerText = ' ';
        } else {
          let mayusculas = campoTexto.value.toUpperCase();
          campoResultado.innerText = mayusculas;
        }
      }
      btnMayuscula.addEventListener('click', convertirMayusculas);

      function convertirMinusculas() {
        if (campoTexto.value == 0) {
          alert('¡ERROR!: NO HAY TEXTO PARA CONVERTIR');
          campoResultado.innerText = ' ';
        } else {
          let minusculas = campoTexto.value.toLowerCase();
          campoResultado.innerText = minusculas;
        }
      }
      btnMinuscula.addEventListener('click', convertirMinusculas);

      function borrarTexto() {
        if (campoTexto.value == 0 || campoResultado.innerText == ' ') {
          campoResultado.innerText = 'No hay texto para borrar';
        } else {
          campoResultado.innerText = ' ';
          campoTexto.value = ' ';
        }
      }
      btnLimpiar.addEventListener('click', borrarTexto);
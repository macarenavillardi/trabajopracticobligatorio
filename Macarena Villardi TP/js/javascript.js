
  function validar() {
    var form = document.form;

      if (form.nombre.value==0)
        alert ("El campo NOMBRE está vacío");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    
  }


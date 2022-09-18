const btn = document.querySelector("#btnenviar")

btn.addEventListener("click", registrar)

function registrar () {
  let aForm = []
  sNombre = ''
  sMail= ''
  sCons = '' 

  sNombre = document.querySelector('#FormControlInputnombre').value
  sMail = document.querySelector('#FormControlInputmail').value
  sCons= document.querySelector('#exampleFormControlTextarea1').value
  
  aForm.push(sNombre,sMail,sCons)
  localStorage.setItem('nuevaCons', JSON.stringify(aForm))
   
}
  


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jvz48sf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire('Enviado');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
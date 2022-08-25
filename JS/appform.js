let boton = document.querySelector("#btnenviar")

boton.addEventListener("click", registrar)

function registrar (event) {
  event.preventDefault()
  let aForm = []
  sNombre = ''
  sMail= ''
  sCons = '' 

  sNombre = document.querySelector('#FormControlInputnombre').value
  sMail = document.querySelector('#FormControlInputmail').value
  sCons= document.querySelector('#exampleFormControlTextarea1').value

  aForm.push(sNombre,sMail,sCons)

  console.log(aForm)
  }


function registrarCons (nForm){
  aForm=getLista()
  aForm.push(nForm)
  localStorage.setItem('nuevaCons', JSON.stringify(aForm))
}

function getLista () {

let nLista = JSON.parse(localStorage.getItem('nuevaCons'))
return nLista

}

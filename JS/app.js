// class para construir objetos

class Promocion {
    constructor (id,nombre,fotos,videos,edicion,precio){
        this.id=id;
        this.nombre=nombre;
        this.fotos=fotos;
        this.videos=videos;
        this.edicion=edicion;
        this.precio=precio;
    }
}

//creacion de promociones 

promo1 = (new Promocion(1, "Promocion 1", 50 , 5 , "s/edicion" , 1200))
promo2 = (new Promocion(2, "Promocion 2", 50 , 5 , "c/edicion" , 1500))
promo3 = (new Promocion(3, "Promocion 3", 100 , 10 , "s/edicion", 2000))
promo4 = (new Promocion(4, "Promocion 4", 100 , 10 , "c/edicion" , 2500))

//Array

const promociones = [promo1,promo2,promo3,promo4]

// Funcion que filtra

function filtrarPromocion(fotos, videos, edicion){

    return promociones
    .filter(promo => promo.fotos == fotos || fotos == "fotos")
    .filter(promo => promo.videos == videos || videos == "videos")
    .filter(promo => promo.edicion == edicion.toLowerCase() || edicion == "edicion")
  }
  
  
  // Funcion llamada al clickear en boton filtrar
  
  function def(){
    let fotos = document.getElementById("fotos").value.toLowerCase()
    let videos = document.getElementById("videos").value.toLowerCase()
    let edicion = document.getElementById("edicion").value.toLowerCase()
    
    listpromo (fotos, videos, edicion)
  }
 
  // Funcion genera listado en HTML

  function listpromo(fotos, videos, edicion){
    const htmlmensaje = document.getElementById("mensaje")
    let list = ""
    listado = filtrarPromocion(fotos, videos, edicion)
    
    listado.forEach((promo) => {
      list += Mensaje(promo)
    console.log(list)
    
    })
    list==""? list+=sinResultado() : list==list
    htmlmensaje.innerHTML = list
  }
  
  function Mensaje (promo){
    list = ``
    list+= `<div> La ${promo.nombre} cuenta con ${promo.fotos} fotos, ${promo.videos} videos ${promo.edicion} y el costo es de $ ${promo.precio}
    </div>`
    return list
   
  }
  
function sinResultado (){
    let nada = `<div> No hay resultados </div>`
    return nada
}


document.querySelector('#btnenviar').addEventListener("click", registrar)

function registrar (event) {
  event.preventDefault()
  var aForm = []
  sNombre = ''
  sMail= ''
  sCons = '' 

  sNombre = document.querySelector('#FormControlInputnombre').value
  sMail =document.querySelector('#FormControlInputmail').value
  sCons=document.querySelector('#exampleFormControlTextarea1').value

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

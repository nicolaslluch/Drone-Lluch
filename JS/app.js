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
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'No se encontraron resultados',
    showConfirmButton: false,
    timer: 1500
  })
  return nada
}

// funcion para calcular precio sin promociones
function costo(A, B, C, D)  {
  res=A*B + C*D
  return res
  
}

const calcular = document.getElementById("calcular")

calcular.addEventListener("click", calculo)

/* const precio = costo(cantidadFotos,precioFoto,cantidadVideos,precioVideo)
console.log (precio) */


function calculo(event){
event.preventDefault()
let cantidadFotos = document.getElementById("Formfotos").value
let cantidadVideos = document.getElementById("Formvideos").value
const precioFoto=20
const precioVideo=100

const precio = costo(cantidadFotos,precioFoto,cantidadVideos,precioVideo)
console.log(precio)
Swal.fire(`El costo es de ${precio}`);
}

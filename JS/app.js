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
    .filter(promo => fotos == promo.fotos || fotos == "fotos")
    .filter(promo => videos == promo.videos || videos == "videos")
    .filter(promo => edicion == promo.edicion.toLowerCase() || edicion == "edicion")
  }
  
  // Funcion genera listado en HTML

  function listpromo(fotos, videos, edicion){
    const htmlmensaje = document.getElementById("mensaje")
    let list = ""
    listado = filtrarPromocion(fotos, videos, edicion)
    
    listado.forEach((promo) => {
      list += Mensaje(promo)
    })
    if (list==""){
        list+=sinResultado()
    }
    
    htmlmensaje.innerHTML = list
  }

// Funcion llamada al clickear en boton filtrar

function def(){
    let fotos = document.getElementById("fotos").value.toLowerCase()
    let videos = document.getElementById("videos").value.toLowerCase()
    let edicion = document.getElementById("edicion").value.toLowerCase()

    listpromo (fotos, videos, edicion)
}

function Mensaje (promo){
 list = ``
 list+= `<div>La ${promo.nombre} cuenta con ${promo.fotos} fotos, ${promo.videos} videos ${promo.edicion} y el costo es de $ ${promo.precio}
 </div>`
 return list
}

function sinResultado (){
    let nada = `<div> No hay resultados </div>`
    return nada
}

























































// Definicion de funciones para filtrar segun el booklet ej 4

/* function filtroFotos(promociones, cantfotos){
    return promociones.filter(objeto => objeto.cantfotos === parseInt(cantfotos))
}

function filtroVideos(promociones, cantvideos){
    return promociones.filter(objeto => objeto.cantvideos === parseInt(cantvideos))
}

function filtroEdicion(promociones, edicion){
	return promociones.filter(objeto => objeto.edicion === edicion)
}

//funcion que busca en el array y arma lista

function listaPromociones(Promociones) {
    let lista = "";
    for (const Promocion of Promociones) {
        lista += 'La ' + Promocion.nombre + ' incluye ' + Promocion.cantfotos + ' fotos ' + 'y ' + Promocion.cantvideos +' videos, ' + Promocion.edicion + ' y el precio es de ' + Promocion.precio + ' $ ' + '\n'
    }
    return lista;
}

// Desarrollo

let elegir = prompt ('Desea comprar alguna de nuestras promociones?').toLowerCase()

//con promocion

while (elegir!= 'si' & elegir!='no'){
       alert ('ingrese si o no')
       elegir = prompt ('Desea comprar alguna de nuestras promociones?').toLowerCase()
}

if (elegir == 'si') {
    let filtro = prompt ('Como desea filtrar? \n Fotos \n Videos \n Edicion').toLowerCase()
    while (filtro != 'fotos' & filtro!='videos' & filtro != 'edicion'){
        alert ('ingrese fotos, video o edicion')
        filtro = prompt ('Como desea filtrar? \n Fotos \n Videos \n Edicion').toLowerCase()
    }    
    if (filtro == 'fotos'){
        let fotos= prompt('Cuantas fotos desea? \n 50 \n 100')
        while (fotos!= 50 & fotos!= 100){
            alert ('Ingrese una cantidad de fotos igual a 50 o 100')
            fotos= prompt('Cuantas fotos desea? \n 50 \n 100')
        }
        if (fotos==50){
            let cantfotos=50
            filtro=filtroFotos(Promociones,cantfotos)
            alert(listaPromociones(filtro))
        }
        else if (fotos==100){
            let cantfotos=100
            filtro=filtroFotos(Promociones,cantfotos)
            alert(listaPromociones(filtro))
        }
    }
    else if (filtro=='videos'){
        let videos = prompt ('Cuantos videos de 30 segundos desea? \n 5 \n 10')
        while (videos!= 5 & videos!= 10){
        alert ('Ingrese una cantidad de videos igual a 5 o 10')
        videos= prompt('Cuantos videos de 30 segundos desea? \n 5 \n 10')
        }
        if (videos==5){
            let cantvideos=5
            filtro=filtroVideos(Promociones,cantvideos)
            alert(listaPromociones(filtro))
        }
        else if (videos==10){
            let cantvideos=10
            filtro=filtroVideos(Promociones,cantvideos)
            alert(listaPromociones(filtro))
        }
    }
    else if (filtro='edicion'){
        let edicion = prompt ('desea edicion? \n si \n no')
        while (edicion!='si' & edicion!='no'){
            alert ('ingrese si o no')
            edicion = prompt ('desea edicion? \n si \n no')
        }
        if (edicion == 'si'){
            let edicion = 'c/edicion'
            filtro= filtroEdicion(Promociones, edicion)
            alert(listaPromociones(filtro))
        }
        else if (edicion == 'no'){
            let edicion = 's/edicion'
            filtro= filtroEdicion(Promociones, edicion)
            alert(listaPromociones(filtro))    
        }   
    }
}

// sin promocion

else if (elegir == 'no'){

let precioFoto=20
let precioVideo=100
let cantidadFotos=prompt('Ingrese la cantidad de fotos que desea')
let cantidadVideos=prompt('Ingrese la cantidad de videos que desea')
let res

// funcion para calcular precio sin promociones

function costo(A, B, C, D)  {
    res=A*B + C*D
    return res
}

let fotosyvideos
while (fotosyvideos!=='valor en rango'){
    //debe ser un valor mayor a 4 para fotos y mayor a 1 para videos//
    if(cantidadFotos<5 || cantidadVideos<2){
        fotosyvideos= 'fuera de rango'
        alert('El minimo de fotos por produccion es de 5 y el minimo de videos por produccion es 2')
        cantidadFotos=prompt('Ingrese la cantidad de fotos que desea')
        cantidadVideos=prompt('Ingrese la cantidad de videos que desea')
    }
    else if (isNaN(cantidadFotos) || isNaN(cantidadVideos)){
        fotosyvideos= 'fuera de rango'
        alert('Ingrese un valor numerico')
        cantidadFotos=prompt('Ingrese la cantidad de fotos que desea')
        cantidadVideos=prompt('Ingrese la cantidad de videos que desea')
    }
    else {
        fotosyvideos='valor en rango'
        res=costo(cantidadFotos,precioFoto,cantidadVideos,precioVideo)
        alert('El precio de su produccion de fotos y videos editados es de ' + '$ ' + res)
    }
}
 */
/* let input
input = document.getElementById("boton calcular") */

/* console.log(cantidadFotos)
console.log(cantidadVideos)
console.log(res)
document.write(res)

}
 */
// bucle es una estructura que se repite  , 
// los bucles son mayormente usados  par poder recorrer arrays. objeto . 
//leer CADA ELEMENTO DE MANERA INDEPENDIENTE 
// el bucles ma usado for = tod

// iterador => indice 
// i++
//i = i+1
//
//bucle 
// for (let i = 0; i <=10 ; i++){
//     console.log("iterador" , i)
// }

// // como recorrer con bucles 
// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for (let j = 0; j< numeros.length ; j++ ){
//     //imprimir los numero pares 
//     if(numeros[j] % 2 ===0){
//         console.log(numeros[j])
//     }
// }

// const alumnos =["pepe","yovana","yubel", "diego","pedro"];

// for (let i = 0 ; i < alumnos.length; i++){
//     console.log(alumnos[i])
// }

//habra arryas de objetos

const laptops=[
    {
    marca : "mac",
    precio: 2500,
    nombre: "android",
},{
    marca: "acer",
    precio: 1500,
    nombre: "juan",
},
{
    marca: "lenovo",
    precio: 1500,
    nombre: "monito",
}
]

// console.log("arryas de objetos", laptops)

for (o = 0 ; o < laptops.length; o++){
    console.log(laptops[o].marca)
}

//-----------------------
// map 
//

const productos =[
    {
        name: "tv",
        price: 1800,
    },
    {
        name:"celular",
        price: 2000,
    },
    {
       name: "monitor",
       price: 1200,
    }
]

productos.map((productos,index)=>{
    console.log("indice", index);
    console.log("producto", productos.name)
})


//---------------------------------------
// bucle WHILE

// tambien sirve para poder hacer una accion en un numero determinado de veces 
// es un bucle 


let contador = 0;

while(contador <= 5){
    console.log("contador" , contador);
// no se olvide de alterar el contador en cada vuelta 
contador++;
}

// escribir un programa que poda al usuario una palabra y la muestra en pantalla 10 veces

//function imprimirDiesVeces(palabra){
  //  let contador = 0 ;
   // while(contador <20){
        //console.log(palabra);
       // contador++
    //}
//}

//imprimirDiesVeces("holaaaa chicosss")

//es un bucle es como una mescla del map y del for

const numero2=[ 1,2,3,4,5,6,7,8,9,10]

numero2.forEach((numero2, index)=>{

    console.log("que hace", index)
    return numero2*2;
})

const productos=[
    {
        name:"helena",
        price:10000,
    },
    {
        name:"navarro",
        price:20000,
    },
    {
        name:"eduardo",
        price:30000,
    },
];

producto2.forEach((producto2)=>){
    console.log(producto2)
})

producto.forEach((producto2))=> 
console.log(producto2. price))


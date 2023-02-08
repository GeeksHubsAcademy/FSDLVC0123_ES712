

//Devuelve true o false si el elemento está efectivamente incluido en el array.
// let golosinas = ["nube", "ballena", "platano", "tiburon"];

// console.log(golosinas.includes("platano"));


// //Object Entries & Object Values

// let Felipe = {
//     deporte: "baloncesto",
//     bebida: "cerveza",
//     estacion: "primavera",
//     pelicula: "blade runner"
// }

// console.log(Object.entries(Felipe));
// console.log(Object.values(Felipe));


// ///////////////////////////////////////////////////////

// let alumno = "Adrián";

// console.log(alumno.padStart(20, "guau"));
// console.log(alumno.padEnd(20, "guauuu"));


//Object.getOwnPropertyDescriptors()

// let Ignacio = {
//     libro: "El nombre del viento",
//     pelicula: "El señor de los anillos",
//     videojuego: "Halo",
//     deporte: "Waterpolo"
// }

// console.log(Object.getOwnPropertyDescriptors(Ignacio));


// //Array Flat

// let array = [1,2,3,4,5,[6,7,8,[9,4,3,2,2,[5,4,3,3,[6,5,4,3]]]]];

// console.log(array);

// console.log(array.flat(Infinity));


// let nombre = "   David";

// let nombre2 = "Fernando          ";

// console.log(nombre.trimStart());
// console.log(nombre2.trimEnd());

// /////////////////////////////////////////////

// let discos = [
//     ["Bob Marley", "The legend", "Jamaica"],
//     ["Duki", "the best", "the worst"],
//     ["Julio Iglesias", "Hey", "Calor"],
//     ["Iron Maiden", "Iron Maiden", "Killers", "The Number Of The Beast", "Piece of Mind", "PowerSlave"],
//     ["Bring me the horizon"]
// ];

// console.log(Object.fromEntries(discos));


// let dulces = ["donut", "bollycao", "phoskitos"];

// dulces.map(
//     (pastel) => {
//         console.log("Por cada elemento dentro del array...mapeo y genero una funcion flecha");
//     }
// )



// //Function to string....

// const Multiplicar = (paraA, paraB) => {
//     return paraA * paraB;
//     //hahahahahahaha nadie sabe para que vale esto

//     //buahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh que poco lore bro
// }

// let funcionEnString = Multiplicar.toString();

// console.log(funcionEnString)

// let bocadillos = {
//     bocadillo1 : "tortilla",
//     bocadillo2 : "chivito"
// }

// console.log(JSON.stringify(bocadillos));


// //Nullish coalescing, ante un dato undefined o null, nos devolverá la alternativa que le demos.
// let dia;

// console.log(dia ?? 'patata');



let petardos = {
    modelo1 : "Masclet",
    modelo2 : "Chinito",
    modelo3 : "Tomahawk",
    modelo4 : "Tro"
}

//Optional chaining nos permite hacer referencia temporal a una propiedad que es de momento, undefined.

console.log(petardos.modelo1?.combustible);

petardos.modelo1 = {nombre : "Masclet", combustible: "Polvora"};

console.log(petardos.modelo1.combustible);



//CASO FALSY
let moto = undefined;

let moto2 = 50000;

moto ??= moto2;

console.log(moto);

///////////////////

let bici = false;

let bici2 = 200;

bici ||= bici2;

console.log(bici);

//////////////////

//REPLACE

let frase = "si estudias si aprobarás";

console.log(frase.replace("si", "si no"));
console.log(frase.replaceAll("si", "no"));
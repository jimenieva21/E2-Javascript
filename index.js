const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];

//Ejercicio 1

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log("La " + pizza.nombre + " tiene un id impar")
  }
})
console.log ("--------------------------------------------");

//Ejercicio 2
const precioMenorA600 = pizzas.filter((pizza) => {
  if (pizza.precio < 600) {
    console.log("La única pizza con precio menor a 600 es la " + pizza.nombre + " que tiene un precio de " + pizza.precio)
  }
})
console.log ("--------------------------------------------");

//Ejercicio 3
pizzas.forEach((pizza) => {
  console.log ("La " + pizza.nombre + " tiene un precio de " + pizza.precio );
})
console.log ("--------------------------------------------");

//Ejercicio 4 
pizzas.forEach((pizza) => {
  console.log ("La " + pizza.nombre + " tiene los siguientes ingredientes: " + pizza.ingredientes);
})
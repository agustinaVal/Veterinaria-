import Animal from "./Animal";
import Persona from "./Persona";

const btnAnimal = document.getElementById("Btn");
const animal = new Animal();
const person = new Persona();

btnAnimal.addEventListener("click", () => {

  console.log(animal.nombreAnimal.value);
  console.log(person.nombre.value);
  
  const listaAnimales = document.getElementById("ListaAnimales");
  listaAnimales.innerHTML += `${person.nombre.value} <br>`;
  listaAnimales.innerHTML += `${animal.nombreAnimal.value} <br>`; 
  listaAnimales.innerHTML += `${animal.tipoAnimal.value} <br>`; 
  listaAnimales.innerHTML += `${animal.enfAnimal.value} <br>`; 
})

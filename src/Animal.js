import Persona from "./Persona"

// Se llama nueva instancia de Persona
const persona = new Persona()
// Clase Hija

class Animal extends Persona {
  constructor() {
    super()
    this.nombreAnimal = persona.datosAnimal().nomAnimal;
  }
}

export default Animal;

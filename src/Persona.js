class Persona {
  constructor() {
    this.nombre = document.getElementById("dueño");
  }

  datosAnimal() {
    return {
      nomAnimal: document.getElementById("nombre"),
      tipoAnimal: document.getElementById("tipo"),
      enfAnimal: document.getElementById("enfermedad")
    }
  }

}

export default Persona;
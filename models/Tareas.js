const Tarea = require('./Tarea')

class Tareas {

    _listado = {}; // _ para indicar que es privada, se trabaja como un objeto. Base de Datos no relacional

    constructor (){
        this._listado = {};
    }
    
    crearTarea(desc){
        const tarea = new Tarea(desc); // Crea tarea con id unico
        this._listado[tarea.id] = tarea; // Se pasa tarea.id como referencia para guardarlo en el listado
    }

    get listadoArray(){
        let listado = [];
        Object.keys(this._listado).forEach(keys => { //* Metodo de JS donde se pueden traer las keys de este objeto
            listado.push(this._listado[keys].desc);
        })

        return listado;

    }

}


module.exports = Tareas;
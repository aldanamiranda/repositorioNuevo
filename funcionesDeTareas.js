const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (nuevaTarea) {
        fs.writeFileSync(this.archivo, JSON.stringify(nuevaTarea, null, ' '))
    },
    guardarTarea: function (nuevaTarea) {
        let tareasUpd = this.leerArchivo();
        tareasUpd.push(nuevaTarea);
        this.escribirJSON(tareasUpd);
    },
    filtrarPorEstado: function (estado) {
        let tareas = this.leerArchivo();
        let filtrado = tareas.filter(function (tarea) {
            return tarea.estado == estado;
        });
        return filtrado
    }
}
module.exports = archivoTareas;
import { EventEmitter, Output } from '@angular/core';

export class EmpleadosService {
    empleados = [{
            nombre: 'Pepito',
            edad: 20,
            cargo: 'Ingeniero',
            estado: 'Activo'
        }];

    agregarEmpleado(empleado: {nombre: string, edad: number, cargo: string, estado: string}) {
        this.empleados.push(empleado);
    }

    actualizarEstado(id: number, estado: string) {
        this.empleados[id].estado = estado;
    }
}
  
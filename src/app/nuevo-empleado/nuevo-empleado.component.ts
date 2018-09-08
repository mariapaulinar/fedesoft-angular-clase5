import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  nombre: string = '';
  edad: number = 18;
  cargo: string = '';
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
  }

  agregarEmpleado(){
    this.empleadosService.agregarEmpleado({nombre: this.nombre, edad: this.edad, cargo: this.cargo, estado: 'Activo'});
  }

}

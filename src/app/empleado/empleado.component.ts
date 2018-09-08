import { Component, OnInit, Input } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
 @Input() emp: {nombre: string, edad: number, cargo: string, estado: string};
 @Input() id;
  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit() {
  }

  actualizarEstado() {
    this.emp.estado = (this.emp.estado == 'Activo') ? 'Inactivo' : 'Activo';
    this.empleadosService.actualizarEstado(this.id, this.emp.estado);
  }

}

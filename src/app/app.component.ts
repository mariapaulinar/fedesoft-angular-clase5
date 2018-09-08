import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  empleados: {nombre: string, edad: number, cargo: string, estado: string}[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit() {
    this.empleados = this.empleadosService.empleados;
  }
  
}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';


// Definicion del Arreglo
type Arreglo = {
  nombre: string;
  costos: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Ejercicio Practica Angular';

  personajes: Arreglo[] = []

  constructor(){
    // Rellenando el arreglo
    this.personajes.push({nombre: 'Batman', costos: '100'}) 
    this.personajes.push({nombre: 'Superman', costos: '200'})
  }

  


}

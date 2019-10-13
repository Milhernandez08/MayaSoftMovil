import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesamiento',
  templateUrl: './procesamiento.page.html',
  styleUrls: ['./procesamiento.page.scss'],
})
export class ProcesamientoPage implements OnInit {

  
  lugares = null;
  lugaresIds = [];

  lugaress = [
    {
      id: 1,
      id_usuario : "Calep", //numero de usuario
      id_lote : 'Potrero', // numero de terreno
      nombre : 'Fresno',
      longitud : 14.9489846,
      latitud : -163.55554
    },
    {
      id: 2,
      id_usuario : "Juan", //numero de usuario
      id_lote : 'El pedregal', // numero de terreno
      nombre : 'Arbol de limon',
      longitud : 14.9489846,
      latitud : -163.55554
    }
  ];
  constructor() { }
  
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { KeyValuePipe, NgFor } from '@angular/common';

interface Vehiculo {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: string;
  kilometraje: number;
  color: string;
  imagen: string;
}

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss',
})
export class TablaComponent {
  vehiculos: Vehiculo[] = [];
  marcasCount: { [key: string]: number } = {};
  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.contarMarcas();
    });
  }

  contarMarcas(): void {
    this.vehiculos.forEach((vehiculo) => {
      this.marcasCount[vehiculo.marca] =
        (this.marcasCount[vehiculo.marca] || 0) + 1;
    });
  }
}

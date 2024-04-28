import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './tabla.component';
import { VehiculosService } from '../services/vehiculos.service';
import { Observable, of } from 'rxjs';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;
  let mockVehiculosService: {
    getVehiculos: {
      and: {
        returnValue: (
          arg0: Observable<
            {
              id: number;
              marca: string;
              linea: string;
              referencia: string;
              modelo: number;
              kilometraje: number;
              color: string;
              imagen: string;
            }[]
          >
        ) => void;
      };
    };
  };

  beforeEach(async () => {
    let vehiculos = [
      {
        id: 1,
        marca: 'Renault',
        linea: 'Kangoo',
        referencia: 'VU Express',
        modelo: 2017,
        kilometraje: 93272,
        color: 'Blanco',
        imagen:
          'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg',
      },
      {
        id: 2,
        marca: 'Chevrolet',
        linea: 'Spark',
        referencia: 'Life',
        modelo: 2018,
        kilometraje: 55926,
        color: 'Plata',
        imagen:
          'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg',
      },
      {
        id: 3,
        marca: 'Chevrolet',
        linea: 'Sail',
        referencia: 'LT Sedan',
        modelo: 2016,
        kilometraje: 94321,
        color: 'Rojo',
        imagen:
          'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png',
      },
    ];
    mockVehiculosService = jasmine.createSpyObj('VehiculosService', [
      'getVehiculos',
    ]);
    mockVehiculosService.getVehiculos.and.returnValue(of(vehiculos));
    await TestBed.configureTestingModule({
      imports: [TablaComponent, HttpClientModule],
      providers: [
        { provide: VehiculosService, useValue: mockVehiculosService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 4 rows', () => {
    const table = fixture.nativeElement.querySelector('table');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(4);
  });

  it('should create a table with the heades id, marca, linea, modelo', () => {
    const table = fixture.nativeElement.querySelector('table');
    const headers = table.querySelectorAll('th');
    expect(headers[0].textContent).toBe(' # ');
    expect(headers[1].textContent).toBe(' Marca ');
    expect(headers[2].textContent).toBe(' Linea ');
    expect(headers[3].textContent).toBe(' Modelo ');
  });
});

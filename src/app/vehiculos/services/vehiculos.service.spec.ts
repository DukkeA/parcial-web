import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VehiculosService } from './vehiculos.service';

describe('ServicesService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

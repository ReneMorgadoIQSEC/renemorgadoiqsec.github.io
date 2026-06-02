import { computed, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetTokenResponse } from '../interfaces/Iauth';
import { TableData } from '../interfaces/ITable';

@Injectable({
  providedIn: 'root',
})
export class ConocerGeneralService {
  private readonly TOKEN_KEY = 'mesa-conocer';
  private tokenSignal = signal<GetTokenResponse | null>(this.getTokenFromStorage());
  isLoggedIn = computed(() => !!this.tokenSignal());

  login(): void {
    this.setToken({ token: '1234567890' });
    this.tokenSignal.set({ token: '1234567890' });
  }

  logout(): void {
    this.tokenSignal.set(null);
  }

  private setToken(token: GetTokenResponse) {
    const encoded = btoa(JSON.stringify(token));
    localStorage.setItem(this.TOKEN_KEY, encoded);
    this.tokenSignal.set(token);
  }

  private getTokenFromStorage(): GetTokenResponse | null {
    try {
      const saved = localStorage.getItem(this.TOKEN_KEY);
      if (!saved) return null;
      const decoded = atob(saved);
      return JSON.parse(decoded) as GetTokenResponse;
    } catch (error) {
      return null;
    }
  }

  getTableData(): Observable<TableData[]> {
    return of([
      {
        nombres: 'Juan',
        apellidoPaterno: 'Perez',
        apellidoMaterno: 'Perez',
        curp: '1234567890',
        correo: 'juan.perez@gmail.com',
        telefono: '1234567890',
        claveElector: '1234567890',
        anioEmision: '2021',
        anioRegistro: '2021',
        numeroEmision: '1234567890',
        cic: '1234567890',
        firma: '1234567890',
        ine: '1234567890',
        fecha_registro: '2021-01-01'
      },
      {
        nombres: 'Maria',
        apellidoPaterno: 'Lopez',
        apellidoMaterno: 'Lopez',
        curp: '1234567890',
        correo: 'maria.lopez@gmail.com',
        telefono: '1234567890',
        claveElector: '1234567890',
        anioEmision: '2021',
        anioRegistro: '2021',
        numeroEmision: '1234567890',
        cic: '1234567890',
        firma: '1234567890',
        ine: '1234567890',
        fecha_registro: '2021-01-01'
      },
      {
        nombres: 'Pedro',
        apellidoPaterno: 'Garcia',
        apellidoMaterno: 'Garcia',
        curp: '1234567890',
        correo: 'pedro.garcia@gmail.com',
        telefono: '1234567890',
        claveElector: '1234567890',
        anioEmision: '2021',
        anioRegistro: '2021',
        numeroEmision: '1234567890',
        cic: '1234567890',
        firma: '1234567890',
        ine: '1234567890',
        fecha_registro: '2021-01-01'
      }
    ]);
  }
}

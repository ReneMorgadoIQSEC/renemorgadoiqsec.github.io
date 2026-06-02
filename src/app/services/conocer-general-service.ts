import { computed, Injectable, signal } from '@angular/core';
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

  getTableData(): TableData[] {
    return [
      {
        nombre: 'Juan Perez',
        curp: '1234567890',
        correo: 'juan.perez@gmail.com',
        telefono: '1234567890',
        fecha_registro: '2021-01-01'
      },
      {
        nombre: 'Maria Lopez',
        curp: '1234567890',
        correo: 'maria.lopez@gmail.com',
        telefono: '1234567890',
        fecha_registro: '2021-01-01'
      },
      {
        nombre: 'Pedro Garcia',
        curp: '1234567890',
        correo: 'pedro.garcia@gmail.com',
        telefono: '1234567890',
        fecha_registro: '2021-01-01'
      }
    ];
  }
}

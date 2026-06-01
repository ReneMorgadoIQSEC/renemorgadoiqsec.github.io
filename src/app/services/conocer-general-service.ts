import { computed, Injectable, signal } from '@angular/core';
import { GetTokenResponse } from '../interfaces/Iauth';

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
}

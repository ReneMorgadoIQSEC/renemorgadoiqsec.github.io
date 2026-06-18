import { Component, signal } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html'
})

export class Header {
  userName = 'Michael Jackson';
  toggleActions = signal(false);

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  getLogoInitials() {
    return this.userName.split(' ').map(name => name[0]).join('').toUpperCase();
  }

  onLogout() {
    this.conocerGeneralService.logout();
    this.router.navigate(['/login']);
  }

  onToggleActions() {
    this.toggleActions.set(!this.toggleActions());
  }
}

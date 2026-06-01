import { Component } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  onButtonClick() {
    this.conocerGeneralService.logout();
    this.router.navigate(['/login']);
  }

}

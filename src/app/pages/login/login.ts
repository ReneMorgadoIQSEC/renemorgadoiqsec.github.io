import { Component } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  onButtonClick() {
    this.conocerGeneralService.login();
    this.router.navigate(['/dashboard']);
  }

}

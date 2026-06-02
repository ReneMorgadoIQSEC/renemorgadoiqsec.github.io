import { Component } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';
import { InputComponent } from "../../components/input/input";

@Component({
  selector: 'app-login',
  imports: [InputComponent],
  templateUrl: './login.html'
})
export class Login {

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  onButtonClick() {
    this.conocerGeneralService.login();
    this.router.navigate(['/dashboard']);
  }

}

import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';
import { InputComponent } from "../../components/input/input";

@Component({
  selector: 'app-login',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {

  allowButtonLogin = signal<boolean>(false);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {
    this.loginForm.valueChanges.subscribe(() => {
      this.allowButtonLogin.set(this.loginForm.valid);
    });
  }
  get emailError(): string {
    const ctrl = this.loginForm.get('email');
    if (!ctrl?.touched) return '';
    if (ctrl.hasError('required')) return 'Ingrese su usuario';
    if (ctrl.hasError('email')) return 'El usuario no es válido';
    return '';
  }

  get passwordError(): string {
    const ctrl = this.loginForm.get('password');
    if (!ctrl?.touched) return '';
    if (ctrl.hasError('required')) return 'Ingrese su contraseña';
    if (ctrl.hasError('minlength')) return 'La contraseña no es válida';
    return '';
  }

  onButtonClick() {
    if (this.allowButtonLogin()) {
      this.conocerGeneralService.login();
      this.router.navigate(['/dashboard']);
    }
  }

}
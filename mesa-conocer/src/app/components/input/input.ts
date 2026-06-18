import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestrictInputDirective } from '../../directives/restrict-input.directive';

@Component({
  selector: 'app-input',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RestrictInputDirective,
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],
})
export class InputComponent implements ControlValueAccessor{
  @Input() variant: 'login' | 'filter' = 'login';
  @Input() type: 'password' | 'email' | 'text' | 'date' = 'text';
  @Input() icon?: string;
  @Input() placeholder?: string;
  @Input() regex?: string | RegExp;
  @Input() maxLength?: number;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() hasError: boolean = false;

  inputId = `input-${Math.random().toString(36).slice(2, 7)}`;
  showPassword = false;
  value = '';
  isDisabled = false;

  private onChange = (_: string) => {};
  private onTouched = () => {};

  get inputType(): string {
    if (this.type === 'password'){
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  onInput(event: Event): void{
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  onBlur(): void{
    this.onTouched();
  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;
  }

  writeValue(val: string): void {
    this.value = val ?? '';
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

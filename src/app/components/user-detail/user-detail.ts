import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { TableData } from '../../interfaces/ITable';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html'
})
export class UserDetail {
  @Input() showModal!: Signal<boolean>;
  @Output() onCloseModal = new EventEmitter<void>();
  @Input() userSelected!: Signal<TableData | undefined>;

  closeModal() {
    this.onCloseModal.emit();
  }

}

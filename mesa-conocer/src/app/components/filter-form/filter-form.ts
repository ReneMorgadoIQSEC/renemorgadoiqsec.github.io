import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFilterForm } from '../../interfaces/ITable';
import { InputComponent } from '../input/input';

@Component({
  selector: 'app-filter-form',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './filter-form.html',
})
export class FilterForm {
  @Output() onFilterSearch = new EventEmitter<IFilterForm>();
  allowButtonSearch = signal<boolean>(false);

  constructor() {
    this.filterForm.valueChanges.subscribe(() => {
      this.allowButtonSearch.set(this.filterForm.value.search !== '' || this.filterForm.value.dateStart !== '' || this.filterForm.value.dateEnd !== '');
    });
  }

  filterForm = new FormGroup({
    search: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnd: new FormControl('')
  });

  onFilterSearchEmit() {
    this.onFilterSearch.emit({
      search: this.filterForm.value.search ?? '',
      dateStart: this.filterForm.value.dateStart ?? '',
      dateEnd: this.filterForm.value.dateEnd ?? ''
    });
  }


}

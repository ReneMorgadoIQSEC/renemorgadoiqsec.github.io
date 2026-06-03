import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { TableData } from '../../interfaces/ITable';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
})
export class Table {
  @Input() data: TableData[] = [];
  @Input() alreadySearched = signal<boolean>(false);
  @Output() onDataSelected = new EventEmitter<TableData>();
  @Output() searchAllData = new EventEmitter<void>();

  onSearchAllData() {
    this.searchAllData.emit();
  }

}

import { Component, Input, signal, Signal } from '@angular/core';
import { TableData } from '../../interfaces/ITable';

@Component({
  selector: 'app-title-export',
  imports: [],
  templateUrl: './title-export.html'
})
export class TitleExport {
  @Input() data!: Signal<TableData[]>;
  
  showExportMenu = signal<boolean>(false);

  toggleExportMenu() {
    this.showExportMenu.set(!this.showExportMenu());
  }

  exportCSV() {
    console.log('exportCSV');
  }

  exportXLSX() {
    console.log('exportXLSX');
  }

}

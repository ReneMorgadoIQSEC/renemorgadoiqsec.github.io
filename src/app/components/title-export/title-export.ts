import { Component, Input, signal } from '@angular/core';
import { TableData } from '../../interfaces/ITable';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-title-export',
  imports: [],
  templateUrl: './title-export.html'
})
export class TitleExport {
  @Input() data!: TableData[];
  @Input() totalData!: TableData[];

  showExportMenu = signal<boolean>(false);

  toggleExportMenu() {
    this.showExportMenu.set(!this.showExportMenu());
  }

  exportCSV() {
    this.showExportMenu.set(false);
    const worksheet = XLSX.utils.json_to_sheet(this.totalData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([`\uFEFF${csv}`], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data-conocer-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  exportXLSX() {
    this.showExportMenu.set(false);
    const worksheet = XLSX.utils.json_to_sheet(this.totalData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, 'data-conocer-export.xlsx');
  }
}

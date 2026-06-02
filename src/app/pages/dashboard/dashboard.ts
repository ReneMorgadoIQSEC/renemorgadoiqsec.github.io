import { Component, signal } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { IFilterForm, TableData } from '../../interfaces/ITable';
import { TitleExport } from '../../components/title-export/title-export';
import { FilterForm } from '../../components/filter-form/filter-form';
import { Table } from '../../components/table/table';
import { UserDetail } from '../../components/user-detail/user-detail';

@Component({
  selector: 'app-dashboard',
  imports: [Header, TitleExport, FilterForm, Table, UserDetail],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  tableData = signal<TableData[]>([]);
  alreadySearched = signal<boolean>(false);
  dataSelected = signal<TableData | undefined>(undefined);
  showModal = signal<boolean>(false);

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {
  }

  onButtonClick() {
    this.conocerGeneralService.logout();
    this.router.navigate(['/login']);
  }

  onFilterSearch(event: IFilterForm) {
    this.tableData.set([]);
    this.alreadySearched.set(true);
    this.conocerGeneralService.getTableData().subscribe((data) => {
      this.tableData.set(data);
    });
  }

  onDataSelected(event: TableData) {
    this.dataSelected.set(event);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  onSearchAllData() {
    this.tableData.set([]);
    this.alreadySearched.set(true);
    this.conocerGeneralService.getTableData().subscribe((data) => {
      this.tableData.set(data);
    });
  }

}

import { Component, signal } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { TableData } from '../../interfaces/ITable';
import { TitleExport } from '../../components/title-export/title-export';
import { FilterForm } from '../../components/filter-form/filter-form';

@Component({
  selector: 'app-dashboard',
  imports: [Header, TitleExport, FilterForm],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  tableData = signal<TableData[]>([]);

  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  onButtonClick() {
    this.conocerGeneralService.logout();
    this.router.navigate(['/login']);
  }

  onFilterSearch(event: any) {
    console.log(event);
  }

}

import { Component } from '@angular/core';
import { ConocerGeneralService } from '../../services/conocer-general-service';
import { Router } from '@angular/router';
import { Pager } from '../../components/pager/pager';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Pager],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  constructor(private readonly conocerGeneralService: ConocerGeneralService, private readonly router: Router) {}

  onButtonClick() {
    this.conocerGeneralService.logout();
    this.router.navigate(['/login']);
  }

  currentPage = 1;
  totalPages = 1;

  onPageChange(page: number): void {
    this.currentPage = page;
  }

}

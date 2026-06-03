import { Component, Input, Output, EventEmitter, OnChanges, OnInit, input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pager',
  imports: [CommonModule],
  templateUrl: './pager.html',
  styleUrl: './pager.scss',
})
export class Pager implements OnChanges, OnInit{
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  pages: (number | '...')[] = [];

  ngOnInit(): void {
    this.builPages();
  }

  ngOnChanges(): void {
    this.builPages();
  }

  builPages(): void{
    const total = this.totalPages;
    const current = this.currentPage;
    const result: (number | '...')[] = [];

    if(total <= 7){
      for (let i = 1; i <= total; i++) result.push(i);
    }else{
      result.push(1);

      if(current > 4) result.push('...');

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for(let i = start; i <= end; i++) result.push(i);

      if(end < total - 1)result.push('...');
      result.push(total);
    }

    this.pages = result;
  }

  goTo(page: number): void{
    if(page < 1 || page > this.totalPages || page === this.currentPage) 
    return;
    this.pageChange.emit(page);
  }

  get hasPrev(): boolean { return this.currentPage > 1;}
  get hasNext(): boolean { return this.currentPage < this.totalPages;}
}

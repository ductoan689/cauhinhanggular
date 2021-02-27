import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { PeriodicElement } from 'src/app/data/she/PeriodicElement ';

@Component({
  selector: 'app-home-add-addcard',
  templateUrl: './home-add-addcard.component.html',
  styleUrls: ['./home-add-addcard.component.scss']
})
export class HomeAddAddcardComponent implements OnInit {
  pageIndex = 1;
  pageSize = 5;
  indexofLast = this.pageSize * this.pageIndex;
  indexofFirst = this.indexofLast - this.pageSize;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<PeriodicElement>;
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  array: PeriodicElement[] = this.ELEMENT_DATA.slice(this.indexofFirst,this.indexofLast);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.array);
    merge(this.paginator.page).subscribe(() => {
      
      
      this.pageIndex = this.paginator.pageIndex ? this.paginator.pageIndex+1 : 1;
      console.log(this.pageIndex);
      
      this.pageSize = this.paginator.pageSize;
      this.indexofLast = this.pageSize * this.pageIndex;
      this.indexofFirst = this.indexofLast - this.pageSize;
      this.array = this.ELEMENT_DATA.slice(this.indexofFirst,this.indexofLast);
      this.dataSource = new MatTableDataSource(this.array);
    });
  }

}

import { AfterViewInit, Component, OnInit, ViewChild, Input,  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

//   template: `

//   <h2>{{"Hello" + parentData}}</h2>

//  `,
 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['id', 'name', 'age'];

enteredName = '';
  addName = '';
  enteredAge = '';
  addAge = '';
onAddName() {
this.addName = this.enteredName;
this.addAge = this.enteredAge;
}



  ngOnInit() {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

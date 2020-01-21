
import { Component, ViewChild } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
  age: number;

}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'React JS', age: 30 } ,
  {id: 2, name: 'Next JS', age: 40 },
  {id: 3, name: 'Angular JS', age: 50 },


];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action, OBJ) {
    OBJ.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: OBJ
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }
  // const d = new Date();
  // this.dataSource.push( {}
  //   id: d.getTime(),
  addRowData( ROW_OBJ ) {
    const d = new Date();
    this.dataSource.push( {
      id: d.getTime(),
      name: ROW_OBJ.name,
      age: ROW_OBJ.age
    });
    this.table.renderRows();

  }
  updateRowData(ROW_OBJ) {
            this.dataSource = this.dataSource.filter((value, a) => {
            if ( value.id === ROW_OBJ.id) {
            value.name = ROW_OBJ.name;
            value.age = ROW_OBJ.age;

            }
            return true;
        });
  }
  deleteRowData(ROW_OBJ) {
    this.dataSource = this.dataSource.filter((value, a) => {
      return value.id !== ROW_OBJ.id;
    });
  }


}

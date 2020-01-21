import { Component } from '@angular/core';

interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

// interface TableState {
//   columns: Array<Column<Row>>;
//   data: Row[];
// }

@Component ({
selector: 'app-name-app',
templateUrl: './name-app.component.html',


})
export class NameAppComponent {

}

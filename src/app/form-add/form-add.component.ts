import { Component } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent {
  enteredName = '';
  addNew = '';
  enteredAge = '';
  addAge = '';
onAddName() {
this.addNew = this.enteredName;
this.addAge = this.enteredAge;
}


  constructor() { }

}

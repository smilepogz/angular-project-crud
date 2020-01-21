import { Component, Output, EventEmitter } from '@angular/core';



@Component ({
  selector: 'app-name-add',
  templateUrl: './name-add.component.html',
  styleUrls: ['./name-add.component.css']
})


export class AddNewComponent {

  enteredName = '';
  addNew = '';
  enteredAge = '';
  addAge = '';
onAddName() {
this.addNew = this.enteredName;
this.addAge = this.enteredAge;
}


  constructor() { }

  // sendMessage() {
  //   this.addNew = this.enteredName;
  //   const adds = {
  //   message: this.enteredName
  //   };
  // //  this.messageEvent.emit(adds);
  // }

}

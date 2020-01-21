import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewComponent } from './name/name-add/name-add.component';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatTableModule,

 } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NameAppComponent } from './name/name-app/name-app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DialogTableComponent } from './dialog-table/dialog-table.component';
import { FormAddComponent } from './form-add/form-add.component';



@NgModule({
  declarations: [
    AppComponent,
    AddNewComponent,
    FormAddComponent,
    DataTableComponent,
    NameAppComponent,
    DialogBoxComponent,
    DialogTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

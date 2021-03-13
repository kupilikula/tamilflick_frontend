import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatDialogModule, FormsModule
  ],
  exports: [
  	MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatDialogModule, FormsModule
  ]

})
export class AppMaterialModule { }

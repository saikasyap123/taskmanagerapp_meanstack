import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const materialComponents = [MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatSnackBarModule]
@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
     materialComponents]
})
export class MaterialModule { }
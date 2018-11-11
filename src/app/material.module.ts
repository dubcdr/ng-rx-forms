import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }

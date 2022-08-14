import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ExportComponent } from './export/export.component';



@NgModule({
  declarations: [
    ExportComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    ExportComponent,
  ]
})
export class SharedModule { }

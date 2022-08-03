import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers/lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LecturersComponent,
    ProfileCardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LecturersModule { }

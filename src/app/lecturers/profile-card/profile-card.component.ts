import { Component, Input, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/shared/types';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }
  lecturers!: Lecturer;

  @Input() lecturer = this.lecturers;
  ngOnInit(): void {
  }

}

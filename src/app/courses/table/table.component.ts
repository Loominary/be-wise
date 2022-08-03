import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  courses!: Array<Course>;

  @Input() lecturer = this.courses;
  ngOnInit(): void {
  }

}

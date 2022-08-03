import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/api.service';
import { Course, CourseSort, FilePath, Lecturer, sortColumn } from '../shared/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  lecturers!: Array<Lecturer>;
  courses!: Array<Course>;
  tableSort!: CourseSort;
  searchFieldValue!: string;
  searchTerm!: string;

  ngOnInit(): void {
    this.getCourses();
    this.tableSort = {
      column: 'name',
      dirAsc: true
  };
  }

  getCourses() {
    this.apiService.getCoursesList().subscribe({
        next: (data: Array<Course>) => { this.courses = data },
        error: (err) => console.error(err),
       //complete: () => console.log(`complete`)
    })
}

sortCourses(column: sortColumn) {
  
  if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
  }
  else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
  }

  
  const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';
  
  this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Course>) => { this.courses = data },
      error: (err) => console.error(err)
  })
}

findCourse(event: KeyboardEvent) {
  const value = this.searchFieldValue;
  console.log(value);
  

  if (event.key === 'Enter' && value.length >= 3) {
      this.apiService.findCourse(value).subscribe({
          next: (data: Array<Course>) => { this.courses = data },
          error: (err) => console.error(err),
      })
  }
}

clearSearch() {
  this.searchFieldValue = '';
  this.getCourses();
}

exportCoursesData() {
  this.apiService.exportCourses().subscribe({
      next: (data: FilePath) => {
          window.open(`${environment.serverUrl}/${data.name}`);
      },
      error: (err) => console.error(err),
  })
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course, FilePath, Lecturer } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLecturersList(): Observable<Array<Lecturer>>{
    return this.http.get<Array<Lecturer>>(`${environment.serverUrl}/lecturers`);
  }

  getCoursesList(): Observable<Array<Course>>{
    return this.http.get<Array<Course>>(`${environment.serverUrl}/courses`);
  }

  getSortedCourses(column: string, direction: string): Observable<Array<Course>> {
    console.log(column, direction, "api service here");
     return this.http.get<Array<Course>>
        (`${environment.serverUrl}/courses?column=${column}&sort=${direction}`);
    //return this.GET<Array<Course>>(`courses?column=${column}&sort=${direction}`);
}

findCourse(searchTerm: string): Observable<Array<Course>> {
  // return this.http.get<Array<Customer>>(`${environment.serverUrl}/customers/find?search=${searchTerm}`)
  return this.GET<Array<Course>>(`courses/find?search=${searchTerm}`);
}

exportCourses(): Observable<FilePath> {
  // return this.http.get<FilePath>(`${environment.serverUrl}/customers/export`);
  return this.GET<FilePath>(`courses/export`);
}

GET<T>(url: string): Observable<T> {
  return this.http.get<T>(
      `${environment.serverUrl}/${url}`,
      /* {headers: { 'x-auth-token': this.token }} */
  )
}

/* POST<T>(url: string, data: object): Observable<T> {
  return this.http.post<T>(
      `${environment.serverUrl}/${url}`,
      data,
      {
          headers: {
              'Content-Type': 'application/json',
              'x-auth-token': this.token
          }
      }
  )
} */
}

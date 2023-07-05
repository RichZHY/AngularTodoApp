import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../global';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post(`${Global.apiUrl}/employees`, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${Global.apiUrl}/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(`${Global.apiUrl}/employees`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${Global.apiUrl}/employees/${id}`);
  }
}

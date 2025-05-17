import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '@core/models/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlBaseServices: string = URL_SERVICIOS;

  constructor(private readonly http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/create`;
    return this.http.post<any>(endpoint, userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/update/${userId}`;
    return this.http.put<any>(endpoint, userData);
  }

  deleteUser(userId: number): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/delete/${userId}`;
    return this.http.delete<any>(endpoint);
  }

  getAllUserByAdministrator(filters?: any): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/`;
    const params = new HttpParams({ fromObject: {
      nombre: filters?.name || '',
      email: filters?.email || ''
    } });
    return this.http.get<any>(endpoint, { params });
  }

  getAllAdministrator(): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/rol/1`;
    return this.http.get<any>(endpoint);
  }

  getAllUsers(): Observable<any> {
    const endpoint = `${this.urlBaseServices}/api/user/rol/2`;
    return this.http.get<any>(endpoint);
  }
  
}
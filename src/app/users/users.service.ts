import { Injectable } from '@angular/core';
import { GenericMethod } from '../generic/generic-method';
import { Users } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements GenericMethod<Users>{

  private END_POINT = 'https://jsonplaceholder.typicode.com/users';
 
  //Injeção de dependência da lib httpclient na camada de serviço
  constructor(private http: HttpClient) { }

  post(data: Users): void {
    this.http.post(this.END_POINT, data);
  }
  put(data: Users): void {
    this.http.put(this.END_POINT,data);
  }
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.END_POINT);
  }
  getById(id?: number): Observable<Users> {
    return this.http.get<Users>(this.END_POINT);
  }
  deleteById(id?: number): void {
    this.http.post(this.END_POINT, data);
  }
  delete(data: Users): void {
    this.http.post(this.END_POINT, data);
  }
}

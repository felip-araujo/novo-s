import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  private apiUrl = 'https://script.google.com/macros/s/AKfycbwYCKXHd5mBYnHdPcOMAv_QBoOq7dtFSZ9bKDrUqvpACfJBdUBYTUkqA2TqfC7zdQeE/exec';

  constructor(private http: HttpClient) {}

  sendFormData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

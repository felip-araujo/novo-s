import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl ='https://script.google.com/macros/s/AKfycbwmc5c7evw_8V3i-wBtfHVd-yuADHdef1RFraaA_rTQLqHxIda_55YcW5oRD0Srqa6u/exec'; // Defina a URL aqui

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData); // Requisição HTTP centralizada
  }
}

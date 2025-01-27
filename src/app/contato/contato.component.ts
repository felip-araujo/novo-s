import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      const formData = this.contatoForm.value;
      this.sendFormData(formData).subscribe(response => {
        console.log('Form data sent successfully', response);
      }, error => {
        console.error('Error sending form data', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  sendFormData(formData: any): Observable<any> {
    const apiUrl = 'https://sheetdb.io/api/v1/bntysanz5d60v'; // API do SheetDB
    return this.http.post(apiUrl, formData);
  }
}

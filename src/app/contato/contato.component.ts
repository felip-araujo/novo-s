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
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      const formData = this.contatoForm.value;
      this.sendFormData(formData).subscribe(response => {
        this.successMessage = 'Recebemos sua mensagem!';
        this.errorMessage = null
      }, error => {
        this.errorMessage =  'Erro ao enviar formulário, por favor tente novamente.'
        this.successMessage = null
      });
    } else {
      console.log('Form is invalid');
      this,this.errorMessage = 'Formulario Inválido.'
      this.successMessage = null
    }
  }

  sendFormData(formData: any): Observable<any> {
    const apiUrl = 'https://sheetdb.io/api/v1/bntysanz5d60v'; // API do SheetDB
    return this.http.post(apiUrl, formData);
  }
}

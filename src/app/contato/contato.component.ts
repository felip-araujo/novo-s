import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service'; // Importe o serviço

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  contatoForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) { // Injete o serviço
    this.contatoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue], // Corrigido para checkbox
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    const formData = this.contatoForm.value;

    this.apiService.sendFormData(formData).subscribe(
      () => {
        this.successMessage = 'Sua mensagem foi enviada com sucesso!';
        this.errorMessage = null;
        this.contatoForm.reset(); // Limpa o formulário
      },
      (error) => {
        this.errorMessage = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
        this.successMessage = null;
      }
    );
  }
}

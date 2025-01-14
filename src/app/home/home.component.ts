import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  // Método para abrir o menu
  openMenu(): void {
    this.mobileMenu.nativeElement.classList.remove('hidden');
  }

  // Método para fechar o menu
  closeMenu(): void {
    this.mobileMenu.nativeElement.classList.add('hidden');
  }

  // Fecha o menu ao clicar fora
  closeMenuOnClickOutside(event: Event): void {
    if (event.target === this.mobileMenu.nativeElement) {
      this.mobileMenu.nativeElement.classList.add('hidden');
    }
  }

}

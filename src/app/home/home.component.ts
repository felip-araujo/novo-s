import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit   {


  ngOnInit(): void {
      AOS.init({
        duration: 1200,
        once: true
        });
  }

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

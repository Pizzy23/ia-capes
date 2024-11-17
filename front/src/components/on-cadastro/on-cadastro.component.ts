import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnSectionComponent } from '../../components/on-section/on-section.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'on-cadastro',
  standalone: true,
  imports: [FormsModule, OnSectionComponent, NgFor, RouterLink],
  templateUrl: './on-cadastro.component.html', 
  styleUrl: './on-cadastro.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OnCadastroComponent {
  artigo = {
    text: '',
    title: '',
    authors: [''],
    issn: '',
    topics: [''],
    abstract: '',
    references: ['']
  };

  enviarArtigo() {
    console.log('Artigo enviado:', this.artigo);
  }
}
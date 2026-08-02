import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { BotaoComponent } from '../../componentes/botao/botao.component';
import { DivisorComponent } from '../../componentes/divisor/divisor.component';
import { EstadoVazioComponent } from '../../componentes/estado-vazio/estado-vazio.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { SubtituloComponent } from '../../componentes/subtitulo/subtitulo.component';
import { TituloComponent } from '../../componentes/titulo/titulo.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  imports: [
    CommonModule,
    LivroComponent,
    TituloComponent,
    DivisorComponent,
    BotaoComponent,
    SubtituloComponent,
    EstadoVazioComponent
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  private readonly _livrosService: LivroService = inject(LivroService);

  generosComLivros: {
    genero: GeneroLiterario;
    livros: Livro[]
  }[] = [];

  ngOnInit() {
    // this._livrosService.obterLivros().subscribe( (livros: Livro[]) => {
    //   this._livrosService.organizaLivrosPorGenero(livros).subscribe( (livrosPorGenero: Map<GeneroLiterario, Livro[]>) => {
    //     this.generosComLivros = Array.from(livrosPorGenero.entries()).map(([genero, livros]) => ({ genero, livros }));
    //   });
    // });

    this._livrosService.organizaLivrosPorGenero([]).subscribe((livrosPorGenero: Map<GeneroLiterario, Livro[]>) => {
      this.generosComLivros = this._livrosService.generos.map((genero: GeneroLiterario) => ({
        genero,
        livros: livrosPorGenero.get(genero) || []
      }));
    });
  }



}

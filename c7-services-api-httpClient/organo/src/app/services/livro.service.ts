import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Livro } from '../componentes/livro/livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // Define a URL do endpoint da API para buscar os dados dos livros.
  private readonly _API_URL = 'http://localhost:3000/livros';

  // Existe duas maneira de injetar o HttpClient como dependência, a primeira é utilizando o construtor da classe e a segunda é utilizando a função inject() do Angular. A função inject() é uma forma mais moderna e recomendada de injetar dependências no Angular, pois ela permite que você injete dependências em qualquer lugar do seu código, não apenas no construtor da classe. Além disso, a função inject() também permite que você injete dependências de forma mais flexível, como por exemplo, injetar dependências em funções ou métodos estáticos.
  // constructor(private _httpCliente: HttpClient) { }
  private _httpCliente: HttpClient = inject(HttpClient);

  obterLivros(): Observable<Livro[]> {
    return this._httpCliente.get<Livro[]>(this._API_URL);
  }
}

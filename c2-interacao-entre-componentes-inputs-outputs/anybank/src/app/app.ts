import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from './form-nova-transacao/form-nova-transacao';
import { TransacaoMod } from './modelos/transacao';
import { TipoTransacao } from './enums/tipo-transacao';
import { Extrato } from './extrato/extrato';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao, Extrato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');

  transacoes = signal<TransacaoMod[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;
        default:
          throw new Error('Tipo de transação não identificado.')
      }
    } ,0);
  });

  processarTransacao(transacao: TransacaoMod) {
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!');
    }
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
    console.log(this.transacoes());

  }
}

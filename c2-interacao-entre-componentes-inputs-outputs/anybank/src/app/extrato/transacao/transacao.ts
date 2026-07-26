import { Component, computed, input } from '@angular/core';
import { TransacaoMod } from '../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TipoTransacao } from '../../enums/tipo-transacao';


@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class TransacaoComp {
  transacao = input.required<TransacaoMod>();

  valor = computed(() => {
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}

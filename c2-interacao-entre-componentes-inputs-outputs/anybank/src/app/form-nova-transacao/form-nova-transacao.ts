import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransacaoMod } from '../modelos/transacao';
import { TipoTransacao } from '../enums/tipo-transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {

  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<TransacaoMod>();

  tipoTransacaoEnum = TipoTransacao;

  aoSubmeter() {
    const transacao = new TransacaoMod(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );
    this.transacaoCriada.emit(transacao);
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }

}

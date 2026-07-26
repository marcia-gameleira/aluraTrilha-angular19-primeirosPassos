import { Component, input } from '@angular/core';
import { TransacaoComp } from './transacao/transacao';
import { TransacaoMod } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TransacaoComp],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css',
})
export class Extrato {
  transacoes = input.required<TransacaoMod[]>();
}

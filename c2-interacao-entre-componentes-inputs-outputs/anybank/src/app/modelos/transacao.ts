import { nanoid } from "nanoid";
import { TipoTransacao } from "../enums/tipo-transacao";

export class TransacaoMod {

  readonly id = nanoid();
  readonly data = new Date();

  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ){}
}

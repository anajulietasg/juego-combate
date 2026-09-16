import { Escudo } from "./Escudo";

export abstract class Item {
  private _vida: number;
  private _escudo: Escudo | null = null;     //puede tener escudo o no

  constructor(vida: number) {  //cada tipo le pasa su vida al crearse
    this._vida = vida;
  }

  ponerEscudo(escudo: Escudo): void {
    this._escudo = escudo;
  }

  recibirDisparo(): void {
    const impacto = this._escudo?.reducirImpacto(100) ?? 100;    //si hay escudo reduce el impacto, si no, quita 100 de vida
    this._vida -= impacto;
  }

  estaVivo(): boolean {
    return this._vida > 0;
  }

  get vida(): number {
    return this._vida;
  }
}
export abstract class Item {
  private _vida: number;     

  constructor(vida: number) {  //cada tipo le pasa su vida al crearse
    this._vida = vida;
  }

  recibirDisparo(): void {
    this._vida -= 1;  //cada disparo quita 1 de vida
  }

  estaVivo(): boolean {
    return this._vida > 0;
  }

  get vida(): number {
    return this._vida;
  }
}
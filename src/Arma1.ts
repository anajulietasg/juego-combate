import { IArma } from "./IArma";

export class Arma1 implements IArma {
  private _municiones: number = 30;   //arranca con 30 municiones
  private _danio: number = 100;       //hace 100 de daño por disparo

  disparar(): number {
    const tieneMuniciones = this._municiones > 0;
    this._municiones = Math.max(0, this._municiones - 1);   //descuenta una, nunca baja de 0
    return tieneMuniciones ? this._danio : 0;               //si no quedan municiones devuelve 0
  }

  get municiones(): number {
    return this._municiones;
  }
}
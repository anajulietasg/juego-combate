export class Escudo {
  private _porcentaje: number;   //cuánto daño reduce el escudo

  constructor(porcentaje: number) {
    this._porcentaje = porcentaje;
  }

  get porcentaje(): number {
    return this._porcentaje;
  }

  reducirImpacto(impacto: number): number {
    const bloqueado = impacto * (this._porcentaje / 100);   //cuánto bloquea el escudo
    return impacto - bloqueado;                             //lo que pasa es el impacto menos lo bloqueado
  }
}
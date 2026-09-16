import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";
import { Escudo } from "../src/Escudo";

describe("Item con escudo", () => {
  test("un soldado sin escudo muere de un disparo", () => {
    const soldado = new Soldado();        
    soldado.recibirDisparo();             //impacto completo de 100
    expect(soldado.estaVivo()).toBe(false);   //vida en 0
  });

  test("un soldado con escudo del 50% sobrevive a un disparo", () => {
    const soldado = new Soldado();        
    soldado.ponerEscudo(new Escudo(50));  
    soldado.recibirDisparo();             //el impacto se reduce a 50
    expect(soldado.estaVivo()).toBe(true);   //sigue vivo
  });

  test("un soldado con escudo del 50% muere al segundo disparo", () => {
    const soldado = new Soldado();
    soldado.ponerEscudo(new Escudo(50));
    soldado.recibirDisparo();   
    soldado.recibirDisparo();   
    expect(soldado.estaVivo()).toBe(false);
  });
});
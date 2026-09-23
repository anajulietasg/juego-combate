import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";
import { Escudo } from "../src/Escudo";
import { Tanque } from "../src/Tanque"

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

  test("un tanque con escudo del 50% muere al cuarto disparo", () => {
    const tanque = new Tanque();          //200 de vida
    tanque.ponerEscudo(new Escudo(50));   //escudo del 50%
    for (let i = 0; i < 3; i++) {
      tanque.recibirDisparo();            //3 disparos de 50 = 150 de daño
    }
    expect(tanque.estaVivo()).toBe(true); //le queda 50, sigue vivo
    tanque.recibirDisparo();              //el cuarto disparo lo mata
    expect(tanque.estaVivo()).toBe(false);
  });
});
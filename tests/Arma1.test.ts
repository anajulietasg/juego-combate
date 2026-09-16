import { describe, expect, test } from "vitest";
import { Arma1 } from "../src/Arma1";

describe("Arma1", () => {
  test("al disparar hace daño", () => {
    const arma1 = new Arma1();
    expect(arma1.disparar()).toBe(100);   //hace 100 de daño
  });

  test("cada disparo descuenta una munición", () => {
    const arma1 = new Arma1();
    arma1.disparar();
    expect(arma1.municiones).toBe(29);   
  });

  test("sin municiones no hace daño", () => {
    const arma1 = new Arma1();
    for (let i = 0; i < 30; i++) {   //gasto las 30 municiones
      arma1.disparar();
    }
    expect(arma1.disparar()).toBe(0);   // sin municiones hace 0
  });
});
import { describe, expect, test } from "vitest";
import { Arma2 } from "../src/Arma2";

describe("Arma2", () => {
  test("al disparar hace daño", () => {
    const arma2 = new Arma2();
    expect(arma2.disparar()).toBe(300);   //hace 300 de daño
  });

  test("cada disparo descuenta una munición", () => {
    const arma2 = new Arma2();
    arma2.disparar();
    expect(arma2.municiones).toBe(11);   
  });

  test("sin municiones no hace daño", () => {
    const arma2 = new Arma2();
    for (let i = 0; i < 12; i++) {   //gasto las 12 municiones
      arma2.disparar();
    }
    expect(arma2.disparar()).toBe(0);   // sin municiones hace 0
  });
});
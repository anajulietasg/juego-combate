import { describe, expect, test } from "vitest";
import { Escudo } from "../src/Escudo";

describe("Escudo", () => {
  test("un escudo del 50% reduce el impacto a la mitad", () => {
    const escudo = new Escudo(50);
    expect(escudo.reducirImpacto(100)).toBe(50);   //100 con 50% = 50
  });

  test("un escudo del 30% deja pasar el 70% del impacto", () => {
    const escudo = new Escudo(30);
    expect(escudo.reducirImpacto(300)).toBe(210);   //300 con 30% bloqueado = 210
  });

  test("un escudo del 0% no reduce nada", () => {
    const escudo = new Escudo(0);
    expect(escudo.reducirImpacto(200)).toBe(200);  
  });
});
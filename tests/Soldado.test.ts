import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";

describe("Soldado", () => {
    test("debe estar vivo al crearse", () => {
        const soldado = new Soldado();
        expect(soldado.estaVivo()).toBe(true);
    });

    test("Debe morir al recibir disparo", () => {
        const soldado = new Soldado();
        soldado.recibirDisparo();
        expect(soldado.estaVivo()).toBe(false);
    });

    test("Al crearse debe tener 1 vida", () => {
        const soldado = new Soldado();
        expect(soldado.vida).toBe(1);
    });
});
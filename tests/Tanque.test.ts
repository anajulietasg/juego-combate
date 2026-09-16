import { describe, expect, test } from "vitest";
import { Tanque } from "../src/Tanque";

describe("Tanque", () => {
    test("debe estar vivo al crearse", () => {
        const tanque = new Tanque();
        expect(tanque.estaVivo()).toBe(true);
    });

    test("Debe morir al recibir disparos", () => {
        const tanque = new Tanque();
        tanque.recibirDisparo();
        tanque.recibirDisparo();
        expect(tanque.estaVivo()).toBe(false);
    });

    test("Luego de solo un disparo debe seguir vivo", () => {
        const tanque = new Tanque();
        tanque.recibirDisparo();
        expect(tanque.estaVivo()).toBe(true);
    });
});

import { describe, expect, test } from "vitest";
import { Buque } from "../src/Buque";

describe("Buque", () => {
    test("debe estar vivo al crearse", () => {
        const buque = new Buque();
        expect(buque.estaVivo()).toBe(true);
    });

    test("Debe morir al recibir 3 disparos", () => {
        const buque = new Buque();
        buque.recibirDisparo();
        buque.recibirDisparo();
        buque.recibirDisparo();
        expect(buque.estaVivo()).toBe(false);
    });

    test("Luego de solo 2 disparos debe seguir vivo", () => {
        const buque = new Buque();
        buque.recibirDisparo();
        buque.recibirDisparo();
        expect(buque.estaVivo()).toBe(true);
    });
});
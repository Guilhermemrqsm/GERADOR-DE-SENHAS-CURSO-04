import test from "node:test";
import assert from "node:assert/strict";
import { CHARACTER_SETS, generatePassword } from "./password.js";

const chooseFirst = () => 0;

test("gera uma senha com o tamanho solicitado", () => {
    const password = generatePassword(20, ["uppercase", "numbers"], chooseFirst);

    assert.equal(password.length, 20);
});

test("aceita apenas tamanhos entre 8 e 64 caracteres", () => {
    assert.equal(generatePassword(8, ["lowercase"], chooseFirst).length, 8);
    assert.equal(generatePassword(64, ["lowercase"], chooseFirst).length, 64);
    assert.throws(() => generatePassword(7, ["lowercase"], chooseFirst), RangeError);
    assert.throws(() => generatePassword(65, ["lowercase"], chooseFirst), RangeError);
});

test("inclui ao menos um caractere de cada tipo selecionado", () => {
    const password = generatePassword(16, ["uppercase", "lowercase", "numbers", "symbols"], chooseFirst);

    assert.match(password, /[A-Z]/);
    assert.match(password, /[a-z]/);
    assert.match(password, /[0-9]/);
    assert.ok([...password].some((character) => CHARACTER_SETS.symbols.includes(character)));
});

test("rejeita a geração sem tipos de caracteres", () => {
    assert.throws(() => generatePassword(12, []), /Selecione pelo menos um tipo/);
});

test("rejeita tamanho inválido ou menor que os tipos selecionados", () => {
    assert.throws(() => generatePassword(0, ["uppercase"]), RangeError);
    assert.throws(() => generatePassword(2, ["uppercase", "lowercase", "numbers"]), RangeError);
});

test("define conjuntos de caracteres conhecidos", () => {
    assert.deepEqual(Object.keys(CHARACTER_SETS), ["uppercase", "lowercase", "numbers", "symbols"]);
});

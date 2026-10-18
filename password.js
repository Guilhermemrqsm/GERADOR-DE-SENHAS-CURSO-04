export const CHARACTER_SETS = Object.freeze({
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+[]{};:,.?/"
});

function secureRandomIndex(max) {
    if (!globalThis.crypto || typeof globalThis.crypto.getRandomValues !== "function") {
        throw new Error("Este ambiente não oferece geração segura de números aleatórios.");
    }

    const range = 0x100000000;
    const limit = range - (range % max);
    const value = new Uint32Array(1);

    do {
        globalThis.crypto.getRandomValues(value);
    } while (value[0] >= limit);

    return value[0] % max;
}

export function generatePassword(length, selectedSetNames, randomIndex = secureRandomIndex) {
    if (!Number.isInteger(length) || length < 8 || length > 64) {
        throw new RangeError("O tamanho da senha deve estar entre 8 e 64 caracteres.");
    }

    if (!Array.isArray(selectedSetNames) || selectedSetNames.length === 0) {
        throw new Error("Selecione pelo menos um tipo de caractere.");
    }

    if (selectedSetNames.length > length) {
        throw new RangeError("O tamanho da senha é menor que a quantidade de tipos selecionados.");
    }

    const selectedSets = selectedSetNames.map((name) => {
        const characters = CHARACTER_SETS[name];
        if (!characters) {
            throw new Error(`Tipo de caractere desconhecido: ${name}`);
        }
        return characters;
    });

    const allCharacters = selectedSets.join("");
    const password = selectedSets.map((characters) => characters[randomIndex(characters.length)]);

    while (password.length < length) {
        password.push(allCharacters[randomIndex(allCharacters.length)]);
    }

    for (let index = password.length - 1; index > 0; index -= 1) {
        const swapIndex = randomIndex(index + 1);
        [password[index], password[swapIndex]] = [password[swapIndex], password[index]];
    }

    return password.join("");
}

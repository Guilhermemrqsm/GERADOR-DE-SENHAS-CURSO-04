import { CHARACTER_SETS, generatePassword } from "./password.js";

const passwordField = document.querySelector("#password");
const lengthSlider = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const feedback = document.querySelector("#feedback");

function generatePasswordFromForm() {
    const selectedSetNames = Object.keys(CHARACTER_SETS)
        .filter((name) => document.querySelector(`#${name}`).checked);

    try {
        passwordField.value = generatePassword(Number(lengthSlider.value), selectedSetNames);
        feedback.textContent = "Senha gerada com segurança.";
    } catch (error) {
        passwordField.value = "";
        feedback.textContent = error.message;
    }
}

lengthSlider.addEventListener("input", () => {
    lengthValue.value = `${lengthSlider.value} caracteres`;
});

document.querySelector("#generate-button").addEventListener("click", generatePasswordFromForm);

document.querySelector("#copy-button").addEventListener("click", async () => {
    if (!passwordField.value) {
        feedback.textContent = "Gere uma senha antes de copiar.";
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordField.value);
        feedback.textContent = "Senha copiada para a área de transferência.";
    } catch {
        feedback.textContent = "Não foi possível copiar. Selecione e copie a senha manualmente.";
    }
});

generatePasswordFromForm();

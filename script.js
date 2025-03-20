function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = (valorFatura * 0.30).toFixed(2);
    document.getElementById("poupancaValor").innerText = poupanca + "€";
}

// Narração Automática
function toggleAudio() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui a sua poupança ou envie a sua fatura para garantir o melhor preço!";
    window.speechSynthesis.speak(msg);
}

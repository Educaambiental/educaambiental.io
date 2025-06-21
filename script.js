document.addEventListener("DOMContentLoaded", function() {
    let tamanhoBase = 16;
    let tamanhoAtual = tamanhoBase;

    function aplicarTamanho() {
        document.body.style.fontSize = tamanhoAtual + "px";
    }

    document.getElementById("aumentar").addEventListener("click", function() {
        tamanhoAtual += 2;
        aplicarTamanho();
    });

    document.getElementById("diminuir").addEventListener("click", function() {
        tamanhoAtual -= 2;
        aplicarTamanho();
    });

    document.getElementById("resetar").addEventListener("click", function() {
        tamanhoAtual = tamanhoBase; 
        aplicarTamanho();
    });
});

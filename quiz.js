const perguntas = [
    {
        pergunta: "1. Qual destes materiais mais demora para se decompor na natureza?",
        opcoes: ["Plástico", "Papel", "Cascas de frutas"],
        correta: 0
    },
    {
        pergunta: "2. Qual destas atitudes é a mais sustentável?",
        opcoes: ["Usar copos descartáveis", "Usar uma garrafa reutilizável"],
        correta: 1
    },
    {
        pergunta: "3. Para lidar adequadamente com queimadas urbanas você deve:",
        opcoes: ["reclamar", "Ligar ou mandar mensagem para o número de denúncia"],
        correta: 1
    },
    {
        pergunta: "4. Qual destas é uma maneira de economizar água em casa?",
        opcoes: ["Fechar a torneira ao escovar os dentes", "Tomar banhos longos"],
        correta: 0
    },
    {
        pergunta: "5. Como voce pode contribuir com o meio ambiente agora?", opcoes: ["Compartilhando esta página com conhecidos", "Apenas visualizar a página"],
        correta: 0
    },
    {
        pergunta: "6. Qual destes é o principal problema ambiental enfrentado em Porto Velho:", opcoes: ["Desmatamento", "Queimada"],
        correta: 1
    },
    {
        pergunta: "7. Houve alguma redução nos danos ambientais em rondônia nos últimos anos?", opcoes: ["Sim", "Não"],
        correta: 0
    },
    {
        pergunta: "8. Comprar somente produtos e serviços que necessitar pode ser benéfico para o meio ambiente?", opcoes: ["Sim", "Não"],
        correta: 0
    },
    {
        pergunta: "9. Apesar de ambas serem benéficas, qual destas práticas mais contribui para o meio ambiente:", opcoes: ["Garrafa reutilizável", "Coleta seletiva"],
        correta: 1
    },
    {
        pergunta: "10. Doar roupas e objetos acumulados é uma boa prática para o meio ambiente?", opcoes: ["Sim", "Não"],
        correta: 0
    }
];

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
    const q = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = q.pergunta;
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
    q.opcoes.forEach((op, index) => {
        const btn = document.createElement("button");
        btn.innerText = op;
        btn.onclick = () => responder(index);
        opcoesDiv.appendChild(btn);
    });
    document.getElementById("proxima").style.display = "none";
}

function responder(opcaoEscolhida) {
    if (opcaoEscolhida === perguntas[perguntaAtual].correta) {
        acertos++;
    }
    
    document.querySelectorAll("#opcoes button").forEach(btn => btn.disabled = true);
    document.getElementById("proxima").style.display = "flex";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("pergunta").innerText = "";
        document.getElementById("opcoes").innerHTML = "";
        document.getElementById("proxima").style.display = "none";
        if (acertos == perguntas.length) {
            document.getElementById("resultado").innerText =
            `Parabéns! Você acertou todas as perguntas.`;
        } 
        else {
            document.getElementById("resultado").innerText =
            `Parabéns! Você acertou ${acertos} de ${perguntas.length} perguntas.`;}
    document.getElementById("textoRodapé").style.display = "none";
    document.getElementById("botaoTentarNovamente").style.display = "inline-block";
    }
}
    
function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById("resultado").innerText = "";
    document.getElementById("botaoTentarNovamente").style.display = "none";
    mostrarPergunta();
    document.getElementById("textoRodapé").style.display = "inline-block";
    document.getElementById("opcoes").style.display = "inline-block";
    document.getElementById("pergunta").style.display = "inline-block";
    document.getElementById("pergunta").style.width = "100%";
    document.getElementById("botaoComecar").style.display = "none";
}

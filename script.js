if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollPos', window.scrollY);
    });

    window.addEventListener('load', () => {
        const scrollPos = localStorage.getItem('scrollPos');
        if (scrollPos) {
            window.scrollTo(0, scrollPos);
        }
    });

const legendas = document.querySelectorAll('.fonteFotos');
legendas.forEach(legenda => {
    legenda.setAttribute('aria-hidden', 'true');
});

document.addEventListener("DOMContentLoaded", function() {
    let tamanhoBase = 16;
    let tamanhoAtual = tamanhoBase;

    function aplicarTamanho() {
        document.documentElement.style.fontSize = tamanhoAtual + "px";
    }

    document.getElementById("aumentar").addEventListener("click", function() {
        tamanhoAtual += 1;
        aplicarTamanho();
    });

    document.getElementById("diminuir").addEventListener("click", function() {
        tamanhoAtual -= 1;
        aplicarTamanho();
    });

    document.getElementById("resetar").addEventListener("click", function() {
        tamanhoAtual = tamanhoBase; 
        aplicarTamanho();
    });
});

document.getElementById('compartilhar').addEventListener('click', async () => {
    const url = 'https://educaambiental.github.io/educaambiental.io/';

    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: 'Confira este projeto sobre sustentabilidade!',
                url: url
            });
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
        }
    } else {
        
        try {
            await navigator.clipboard.writeText(url);
            alert("Link copiado para a área de transferência!")
        } 
        catch (err) {
            console.error('Falha ao copiar o link:', err);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoQrCode = document.getElementById("botaoQrCode");
    const imgQrCode = document.getElementById("imgQrCode");

    botaoQrCode.addEventListener('click', function () {
        if (imgQrCode.style.display === "none" || imgQrCode.style.display === "") {
            imgQrCode.style.display = "flex";
            void imgQrCode.offsetWidth;
            imgQrCode.style.opacity = "1";
            botaoQrCode.innerText = "Esconder QRCode ▲";

        } else {
            imgQrCode.style.opacity = "0";
            botaoQrCode.innerText = "Mostrar QRCode ▼";

            setTimeout(()=> {
                imgQrCode.style.display = "none";
            }, 400);
        }
    });
});

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


document.getElementById("compartilhar").addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: 'Projeto Educação Ambiental',
            text: 'Confira este projeto que desenvolvi sobre sustentabilidade!',
            url: window.location.href
        }).then(() => {
            console.log('Compartilhado com sucesso!');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
        });
    } else {
        alert('Seu navegador não suporta compartilhamento direto.');
    }
});



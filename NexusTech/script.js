// Função para realizar o scroll suave até a sessão especificada
function scrollToSection(target) {
    const duration = 900; // Duração da animação em milissegundos

    // Obtém a posição do topo da sessão alvo
    const end = document.querySelector(target).offsetTop;

    // Executa o scroll suave
    smoothScrollTo(target, duration, function() {
        // Callback opcional: aqui você pode adicionar ações adicionais após o scroll, se necessário
        console.log('Scroll concluído até ' + target);
    });
}

// Função de scroll suave genérica
function smoothScrollTo(target, duration, callback) {
    const start = window.pageYOffset;
    const end = document.querySelector(target).offsetTop;
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
        else if (callback) callback();
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Adiciona listener para scroll
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    let currentSection = 0; // Começa em 0 para o scroll inicial
    const sections = ['#sessao0', '#sessao3', '#sessao4'];

    // Listener para o evento de scroll do mouse
    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll para baixo
            currentSection++;
            smoothScrollTo(sections[currentSection], 1200, function() {
                // Callback opcional após o scroll
            });
        } else if (event.deltaY < 0 && currentSection > 0) {
            // Scroll para cima
            currentSection--;
            smoothScrollTo(sections[currentSection], 1200);
        }
    });

    // Listener para os cliques nos itens do header
    const headerItems = document.querySelectorAll('header div');
    headerItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            const targetSection = sections[index];
            scrollToSection(targetSection);
        });
    });
});
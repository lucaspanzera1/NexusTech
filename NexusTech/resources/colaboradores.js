// Função para realizar o scroll suave até a posição especificada
function smoothScrollBy(distance, duration, callback) {
    const start = window.pageYOffset;
    const end = start + distance;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, end - start, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            if (callback) callback();
        }
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

    // Listener para o evento de scroll do mouse
    window.addEventListener('wheel', function(event) {
        const scrollDistance = 830; // Distância para scroll em pixels
        const duration = 1200; // Duração da animação em milissegundos

        if (event.deltaY > 0) {
            // Scroll para baixo
            smoothScrollBy(scrollDistance, duration);
        } else if (event.deltaY < 0) {
            // Scroll para cima
            smoothScrollBy(-scrollDistance, duration);
        }
    });

    // Listener para os cliques nos itens do header
    const headerItems = document.querySelectorAll('header div');
    headerItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            const targetPosition = index * scrollDistance;
            smoothScrollBy(targetPosition - window.pageYOffset, duration);
        });
    });
});


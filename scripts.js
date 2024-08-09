// Suavizar rolagem
$(document).ready(function() {
    // Seleciona todos os links com a classe 'js-scroll-trigger' que possuem um atributo href contendo '#', exceto os que têm href igual a '#'
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Anima a rolagem para o elemento alvo
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000); // Tempo de rolagem de 1000 milissegundos (1 segundo)
    });
});

// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) { // Se o usuário rolou para baixo mais de 10 pixels
        $('#voltar-ao-topo').fadeIn(); // Mostra o botão
    } else {
        $('#voltar-ao-topo').fadeOut(); // Oculta o botão
    }
});

// Quando o botão for clicado, rolar para o topo da página
$('#voltar-ao-topo').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000); // Anima a rolagem de volta ao topo com um tempo de 1000 milissegundos (1 segundo)
});

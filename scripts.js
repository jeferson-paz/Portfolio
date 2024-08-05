// Suavizar rolagem
$(document).ready(function() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000); // Ajuste o tempo de rolagem conforme necessário
    });
});

// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('#voltar-ao-topo').fadeIn();
    } else {
        $('#voltar-ao-topo').fadeOut();
    }
});

// Quando o botão for clicado, rolar para o topo da página
$('#voltar-ao-topo').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000); // Ajuste o tempo de rolagem conforme necessário
});

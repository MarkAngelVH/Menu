$(document).ready(function(){
    var slickOptions = {
        slidesToShow: 3, // Ajusta la cantidad de productos a mostrar
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 740, // Ajusta el ancho máximo para el cambio de diseño
                settings: {
                    slidesToShow: 2, // Cambia a mostrar 2 cartas en lugar de 3
                }
            },
        ],
    };

    $('.carousel').slick(slickOptions);

    $('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if (currentSlide + slick.options.slidesToShow >= slick.slideCount) {
            $('.slick-next').hide(); // Oculta el botón "Next" al llegar al final
        } else {
            $('.slick-next').show();
        }
    });
});

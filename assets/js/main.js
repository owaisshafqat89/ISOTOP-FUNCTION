
//counter
$('.counter').counterUp({
    delay: 20,
    time: 4000
});


// init Isotope
var $grid = $('.grid').isotope({
});
$('.filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


//AOS
AOS.init();

// active buttons
$(document).on('click', '.filter-button', function () {
    $(this).addClass('active').siblings().removeClass('active')
});
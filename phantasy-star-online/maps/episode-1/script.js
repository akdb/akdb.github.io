$(document).ready(function () {
    const mapModal = $('main');
    const mapTitleContainer = $('figcaption');
    const mapImage = $('figure img');
    const accordion = $('nav').accordion({
        collapsible: true,
        animate: 200,
        heightStyle: 'content',
        header: 'h2'
    });
    const accordionLength = accordion.find('h2').length;

    // display map related to image clicked
    $('nav>ul>li>img').click(function () {
        let title = $(this).attr('alt');
        mapTitleContainer.text(title);
        mapImage.attr('src', $(this).attr('src').replace('thumbnails', 'maps'));
        mapModal.fadeIn();
    });

    // close modal when clicking anywhere
    mapModal.click(function () {
        $(this).fadeOut();
    });

    $('#nextArea').button().on('click', function(event) {
        let current = accordion.accordion('option', 'active');
        let next = (current+1) >= accordionLength ? 0 : (current+1);
        accordion.accordion("option", "active", next);
    });
});

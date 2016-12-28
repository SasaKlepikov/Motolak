jQuery(function ($) {
    $(document).ready(function () {
        $('#block-user-login h2').click(function () {
            $(this).parent().toggleClass('active');
        });
    });
});
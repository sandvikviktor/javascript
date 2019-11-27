$(function() {

    function validateInput(id) {
        if ($(id).val() === '') {
            $(id).addClass('is-invalid')
            $(id).removeClass('d-none')
            // $(id).focus();
        } else {
            $(id).removeClass('is-invalid')
            $(id).addClass('is-valid')
        }
    }

    // $('input').keyup(function() {
    //     validateInput('#firstName');
    //     validateInput('#lastName');
    // })

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validateInput(id)
    })


    $('#regForm').submit((e) => {
        e.preventDefault();

        validateInput('#firstName');
        validateInput('#lastName');

    })


});
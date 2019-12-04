$(function() {

    
    function validateField(input) {
        let value = $(input).val();
        let fieldName = $('input').attr('data-fieldName')
        
        // if(value.length < 1) {
        //     $('#error_message').css('display', 'block')
        // }
        if(value.length < 1) {
            $('#error_messages').append(`<li>you must enter your ${fieldName}</li>`)
        }
    }


    // function validateFirstName () {
    //     let firstname_Value = $('#firstName').val();
    //     console.log(firstName_Value);
    // }

    // function validateLastName () {
    //     let lastname_Value = $('#lasttName').val();
    //     console.log(lastName_Value);
    // }


    $('#oneForm').on('submit', function(e) {

        //förhindra att den skickar datat och laddar om sidan
        e.preventDefault();

        validateField('#firstName');
        validateField('#lastName');
    });


});
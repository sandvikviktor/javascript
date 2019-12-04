$(function() {

    $('ul > li').filter('.li').css('color', 'red');    
    // $('ul > li').filter('#3').remove();
    $('ul > li').filter('#3').html('changed');

    $('ul > li').filter(':odd').css('background-color', 'black');
    $('ul > li').filter(':first-child').css('background-color', 'blue');
    $('ul > li').filter(':nth-child(3)').css('background-color', 'yellow');

    let nameArray = ["Hans", "Tommy", "Anna"];
    // console.log(nameArray);


    // nameArray.splice(1,1);
    // console.log(nameArray);

    
    
});
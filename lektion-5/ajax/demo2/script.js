$(function() {

 
    function loadLanguage() {
        const http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {

                

                document.getElementById('headline').innerHTML = 'Hej';
                document.getElementById('registerButton'). innerHTML = 'Hejsan';
            }
        }
        http.open('GET', 'se-SV.json', true);
        http.send();
    }

    loadLanguage();
})
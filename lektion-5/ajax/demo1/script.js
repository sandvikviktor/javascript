$(function() {

    //Javascript
    const http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(this.readyState === 4 || this.status === 200) {
            document.getElementById('result')
        }
    }

    http.open('GET', 'test.txt', true);
    http.send();
})
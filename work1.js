/* print the first <p> tag to the console using the ID, class, and tag.


/* print the special class using both the query and all query selctor

/* change the color of <h1> statement to blue */


var allh1Elements1 = document.getElementsByTagName("h1");
var allh1Elements2 = document.querySelectorAll("h1");

allh1Elements1=

/* change the color of the last <p> tag to yellow */

    function changeColor(blue) {
        var elem = document.getElementById('lastp');
        elem.style.color = blue;
    }
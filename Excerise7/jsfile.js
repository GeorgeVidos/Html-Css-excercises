function myFunction() {
    document.getElementById("container").style.gridTemplateColumns = "auto";
}



function myFunction2() {
    document.getElementById("pap").style.backgroundColor = "yellow";

    document.getElementById("container").style.backgroundColor = "yellow";
    document.getElementById("pap1").style.backgroundColor = "yellow";
}


function myFunction3() {
    alert("The ontoggle event occured");
}

var d = new Date();




function myFunction4() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    var i;
    for (i = 0; i <= 6; i++) {
        if (n == "Sunday") {
            document.getElementById("container").style.backgroundColorr = "yellow";

        } else if (n == "Monday") {
            document.getElementById("container").style.backgroundColor = "green";

        } else if (n == "Tuesday") {
            document.getElementById("container").style.backgroundColor = "purple";

        } else if (n == "Wednesday") {
            document.getElementById("container").style.backgroundColor = "white";

        } else if (n == "Thursday") {
            document.getElementById("container").style.backgroundColor = "blue";

        } else if (n == "Friday") {

            document.getElementById("container").style.backgroundColor = "black";

        } else if (n == "Saturday") {
            document.getElementById("container").style.backgroundColor = "orange";


        }
    }
}

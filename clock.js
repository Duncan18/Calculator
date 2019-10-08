
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var ampm = null;

    if(date.getHours < 12){
        ampm = "AM";
    }else{
        ampm = "PM";
    }

    if(h == 0){
        h = 12;
    }else if(h > 12){
        h = h -12;
    }

    var time = h + ":" + m + ":" + s + " " + ampm + "\n" + (month + 1) + "/" + day + "/" + year;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
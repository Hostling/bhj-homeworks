function inTextFormat(count) {
    let seconds_num = parseInt(count, 10);
    let hours = Math.floor(seconds_num / 3600);
    let minutes = Math.floor((seconds_num - (hours * 3600)) / 60);
    let seconds = seconds_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let time = hours + ':' + minutes + ':' + seconds;
    return time;
}

var count = 5;


var counter = setInterval(timer, 1000);

function timer() {
    if (parseInt(count) <= 0) {
        clearInterval(counter);
        let gift = window.location.href;
        window.location = gift.replace('task.html', 'gift.netology');
    }
    let temp = inTextFormat(count);
    count = (parseInt(count) - 1).toString();

    document.getElementById('timer').textContent = temp;
}
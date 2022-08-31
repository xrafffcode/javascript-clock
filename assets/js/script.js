function init() {
    startTime();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.jam').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
    mytanggal();
    if (cari) {
        if (h > 23) tulis('malam', 'seharusnya kamu sudah tidur');
        else if (h > 18) tulis('malam', 'waktunya mengisi energi');
        else if (h > 17) tulis('petang', 'selamat menikmati senja');
        else if (h > 14) tulis('sore', 'selamat menjalani hari');
        else if (h > 13) tulis('siang', 'tetap semangat')
        else if (h > 9) tulis('siang', 'selamat bekerja')
        else if (h > 4) tulis('pagi', 'selamat beraktivitas');
        else tulis('malam', 'seharusnya kamu sudah tidur');
        if (h > 18) document.querySelector('img').src = "wp1.png";
        else if (h > 4) document.querySelector('img').src = "wp2.png";
        else document.querySelector('img').src = "wp1.png";
    }
}
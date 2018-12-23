/* background gradient code from https://codepen.io/quasimondo/pen/lDdrF */

var sound;
var playing;
var degree;
var song_idx;
var songpath;

var scripts     = document.getElementsByTagName('script');
var raw_path    = scripts[scripts.length-1].src.split('?')[0];
var mydir_enc   = raw_path.split('/').slice(0, -1).join('/');
var path        = mydir_enc.replace(/%20/g, ' ') + '/';
var sound       = new Audio();
sound.addEventListener('ended', skip_forward());

window.onload = function() {
    playing = false;
    song_idx = 0;
    degree = 0;
    setInterval(spin, 5);
    return;
}

function spin() {
    if (playing) {
        degree++;
        var left = document.getElementById('left_spin');
        left.style.transform = 'rotate('+degree+'deg)';
        left.style.webkitTransform = 'rotate('+degree+'deg)';
        left.style.moztransform = 'rotate('+degree+'deg)';

        var right = document.getElementById('right_spin');
        right.style.transform = 'rotate('+degree+'deg)';
        right.style.webkitTransform = 'rotate('+degree+'deg)';
        right.style.moztransform = 'rotate('+degree+'deg)';
    }
    return;
}

function toggle_playstate() {
    if (playing) {
        sound.pause();
        document.getElementById("play").style.display = "block"
        document.getElementById("pause").style.display = "none"
        document.getElementById("text").style.scrollamount = 0;
        playing = false;
    } else {
        sound.play();
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"
        document.getElementById("text").style.scrollamount = 3;
        playing = true;
    }
    return;
}

function skip_forward(id) {
    ui_pop(id)
    console.log("Skipping forward...")
    song_idx++;
    sound.src = "file://" + song_files[song_idx];
    let marquee = document.getElementById("text");
    marquee.innerHTML = song_artists[song_idx] + " :: " + song_titles[song_idx]
    if (!playing) toggle_playstate()
}

function skip_back(id) {
    ui_pop(id);
    console.log("Skipping back...")
    song_idx--;
    sound.src = "file://" + song_files[song_idx];
    let marquee = document.getElementById("text");
    marquee.innerHTML = song_artists[song_idx] + " :: " + song_titles[song_idx]
    if (!playing) toggle_playstate()
}

function ui_pop(id) {
    elem = document.getElementById(id);
    // TODO: Make this fancy transition for buttons
}

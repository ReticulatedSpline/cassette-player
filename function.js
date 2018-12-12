/* gradient code from https://codepen.io/quasimondo/pen/lDdrF */
var playing;
var degree = 0;

window.onload = function() {
    playing = false;

    function spin() {
        // Feeling kind of lazy... //
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

    setInterval(spin, 5);
}

function toggle_playstate() {
    if (playing) {
        document.getElementById("play").style.display = "block"
        document.getElementById("pause").style.display = "none"
        playing = false;
    } else {
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"
        playing = true;
    }
    return;
}

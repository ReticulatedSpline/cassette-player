/* gradient code from https://codepen.io/quasimondo/pen/lDdrF */

var playing;
var degree = 0;
// TODO: Fix this mess later
var songs = [
"Wild West End.flac",
"The Sweet Part of the City.mp3",
"All Day All Night.mp3",
"Father And Son.mp3",
"Old Number Seven.mp3",
"The Fool.mp3",
"からっぽの椅子.mp3",
"Dave's Song.mp3",
"I Love You Baby, I Love You Doll.mp3",
"High Horse.mp3",
"1612.mp3",
"Suspicious Minds.mp3",
"Sultans of Swing.mp3",
"So Good At Being In Trouble.m4a",
"Sincerely, Yours.mp3",
"Dolphin Center.mp3",
"Terrapin.mp3",
"Rhythm and Blues.mp3",
"Take Me To Church.mp3",
"Unfold.mp3",
"Tomorrow.mp3",
"Abandoned Mansion.mp3",
"What Am I Running From.mp3",
"Guitar Beat.mp3",
"My Old Man.mp3",
"Slow Motion.mp3",
"Such A Simple Thing.mp3",
"Stand By Me.mp3",
"Gooey.mp3",
"Collie Man.mp3",
"Find The River.mp3",
"Lower the Heavens.mp3",
"Free Man In Paris.mp3",
"Shake.mp3",
"Edge Of The World.mp3",
"This Too Shall Last.m4a",
"SUMMER BLUE.mp3",
"Summer Wind (Remastered 2008).mp3",
"Step.mp3",
"Jackie and Wilson.mp3",
"Someone Told Me.mp3",
"Family.mp3",
"RULE THE WORLD.mp3",
"Brazil.mp3",
"Victory.mp3",
"Boot On The Seat.mp3",
"Guilty.mp3",
"Anything's Possible (Don't Let'em).m4a",
"Space Song.mp3",
"Cherry Wine (Live).mp3",
"Hey.mp3",
"Banana Pancakes.mp3",
"California soul.mp3",
"Get Back in Line.mp3",
"Detectorists.mp3",
"King for a Day.m4a",
"Howling at Nothing.mp3",
"Brother.mp3",
"Monsoon.mp3",
"Lost in the Light.mp3",
"Two Thousand And Seventeen.mp3",
"Nana.mp3",
"Deep Blue Day.mp3",
"Wolf in the Breast.mp3",
"Sound & Color.mp3",
"Coffee.mp3",
"Excelsior Lady.mp3",
"Safe Side.mp3",
"Gone For Good.mp3",
"House Of The Rising Sun.mp3",
"Something Good.mp3",
"Wakin' On A Pretty Day.mp3",
"Eleven Weeks.mp3",
"Tesselation.mp3",
"Fearless.mp3",
"Strangers.mp3",
"Gravity.mp3",
"Dry The Rain.mp3",
"Falling Son.mp3",
"Mystifies Me.mp3",
];
var sound;

// pathname
var scripts= document.getElementsByTagName('script');
var path= scripts[scripts.length-1].src.split('?')[0];
var mydir_enc = path.split('/').slice(0, -1).join('/');
var mydir = mydir_enc.replace(/%20/g, ' ') + '/';

window.onload = function() {
    playing = false;
    console.log(mydir+ "resources/music/" + songs[0])
    sound = new Audio("./resources/music/" + songs[0]);
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
    setInterval(spin, 5);
    return;
}

function toggle_playstate(id) {
    if (playing) {
        sound.pause();
        document.getElementById("play").style.display = "block"
        document.getElementById("pause").style.display = "none"
        playing = false;
    } else {
        sound.play();
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"
        playing = true;
    }
    ui_pop(id)
    return;
}
function skip_back(id) {
    ui_pop(id);
}


function ui_pop(id) {
    elem = document.getElementById(id);
    // TODO: Make this fancy transition for buttons
}

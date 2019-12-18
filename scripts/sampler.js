var sample = new Audio();
sample.src = "audio/samples/sample1.mp3"
document.getElementById("playButton").onclick = function(){playSample()};

function playSample(){
		if (sample.paused){
			sample.play();
			moveProgressBar();
		}	
	}

function playInstrument(instrument){
	audio = new Audio();
	audio.src = "audio/instruments/" + instrument;
	audio.play();
}

<<<<<<< HEAD
var i = 0;
function moveProgressBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var margin = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (margin >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        margin += 0.78;
        elem.style.marginLeft = margin + "%";
      }
    }
  }
}
=======
>>>>>>> ac96e1347485f6ec4063c44f2ca2bb18118ca7f9

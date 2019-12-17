var sample = new Audio();
sample.src = "audio/samples/sample1.mp3"
sample.loop = true;
document.getElementById("playButton").onclick = function(){playSample()};

function playSample(){
		if (sample.paused){
			sample.play();
		}
		else{
			sample.pause();
		}		
	}

function playInstrument(instrument){
	audio = new Audio();
	audio.src = "audio/instruments/" + instrument;
	audio.play();
}
const pianokeys=document.querySelectorAll(".bottom .win")
const key1=document.querySelector(".getAcces")
var pin2=document.getElementById("pin2");
var piano  =document.getElementById("pin1");
let audio =new Audio("tunes/B.wav");
let volume= document.querySelector("#range")
let allKeys=[]
let saw2=document.querySelector(".saw2")
let saw=document.querySelector(".saw")
// function to play tunes 
const playTune = (win) => {
    if (win) { 
        audio.src = `tunes/${win}.wav`;
        audio.play();
        // inputing value for each tunes played on keyboard and click
       if (piano.style.display === "grid" ) {
        saw.value += win;
       }  else if(pin2.style.display === "grid"){
        saw2.value += win;
       } // Assuming win is the correct value
    }

}
// unction for volume
const handleVolume =(e)=>{
    audio.volume= e.target.value;
}
// function for click action on piano keys
pianokeys.forEach(win =>{
    allKeys.push(win.dataset.key);
    win.addEventListener("click",( ) =>playTune(win.dataset.win));  
  });
//   function for keyboard press
  const pressedKey = (e) => {
    // condition for click only if the piano is popped out
           if (piano.style.display === "grid" || pin2.style.display === "grid") {
        playTune(e.key);
    }
}
// listeners upon click
document.addEventListener("keydown", pressedKey);
volume.addEventListener("input",handleVolume);

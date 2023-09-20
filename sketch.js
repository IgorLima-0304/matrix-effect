//Para um melhor entendimento de como funciona coloque a sua mão em frente a camera e verá um formato de mão feito com ASCII art
//Para que o som toque clique no sketch


const densidade = "Ñ1@#W$9876543210?!abc;:+=,._";

let asciiDiv;
let video;
let video1;
let som;


function preload() {
  soundFormats('mp3');
  som = loadSound("Retrowave.mp3")
}

function mouseClicked(){
  som.play();
}

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  
  video.size(80,80);
  
  asciiDiv = createDiv();
}
function draw() {
  video.loadPixels();
  let asciiImage = "";
  
  for (let j = 0; j<video.height; j++) {
    for(let i =0; i<video.width;i++) {
      const pixellines = (i+j*video.width)*4;
      const r = video.pixels [pixellines + 0];
      const g = video.pixels [pixellines + 1];
      const b = video.pixels [pixellines + 2];
      
      const avg = (r+g+b)/3;
      const len = densidade.length;
      const charindex = floor(map(avg,0,255,len,0));
      
      const c = densidade.charAt(charindex);
      if (c=="") {asciiImage+='&nbsp;';}
      else {asciiImage +=c;}
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
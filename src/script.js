var teal = null;
var gray = null;
var red = null;
var bright = null;
var rainbow = null;
var canvas= document.getElementById("can");

function upload() {
  var file = document.getElementById("input");

  
  original= new SimpleImage(file);
  gray= new SimpleImage(file);
  teal = new SimpleImage(file);
  red = new SimpleImage(file);
  bright = new SimpleImage(file);
  rainbow = new SimpleImage(file);
  clear = new SimpleImage(file);
  original.drawTo(canvas)
 
}


function renewimg(img){ img= new SimpleImage(original);
 return img;
 }

function imgIsLoaded(img) { 
  if(img == null || !img.complete()) {
    return false; 
  }
  else{ return true; }
} 


  function doGray(){
 if(imgIsLoaded(gray)){
   makeGray();
   gray.drawTo(canvas);
   gray = renewimg(gray);
 } }

function makeGray() {
  for (var pixel of gray.values()) {
    var avg = (pixel.getRed() +           pixel.getGreen() + pixel.getBlue()) / 3;
   pixel.setRed(avg);
   pixel.setGreen(avg);
   pixel.setBlue(avg);
  
  }
}


 function doTeal(){
 if(imgIsLoaded(teal)){
   makeTeal();
   teal.drawTo(canvas);
   teal = renewimg(teal);
 } }

function makeTeal() {
   for (var pixel of teal.values()) {
     var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 150) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(avg * 1.3);
      pixel.setBlue(avg * 1.3);
    } 
     else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
  }
}

function doRed(){
   if(imgIsLoaded(red)){
   makeRed();
   red.drawTo(canvas);
   red = renewimg(red);
    } 
  }

function makeRed() {
   for (var pixel of red.values()) {
  var avg = (pixel.getRed() +          pixel.getGreen() + pixel.getBlue())/3;
    if (pixel.getRed() < 128) {
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}


function doBright(){
   if(imgIsLoaded(bright)){
   makeBright();
   bright.drawTo(canvas);
   bright = renewimg(bright);
    } 
  }

function makeBright() {
  for (var pixel of bright.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(pixel.getRed());
      pixel.setGreen(pixel.getGreen());
      pixel.setBlue(pixel.getBlue());
    } else {
      pixel.setRed(pixel.getRed() + 40);
      pixel.setGreen(pixel.getGreen() + 40);
      pixel.setBlue(pixel.getBlue() + 40);
    }
  }
}


function doRainbow(){
   if(imgIsLoaded(rainbow)){
   makeRainbow();
   rainbow.drawTo(canvas);
   rainbow = renewimg(rainbow);
    } 
}
 
function makeRainbow() {
  for (var pixel of rainbow.values()) {
    if (pixel.getY() < rainbow.getHeight() / 6) {
      pixel.setRed(255);
    }
    if (
      pixel.getY() >= rainbow.getHeight() / 6 &&
      pixel.getY() < (rainbow.getHeight() / 6) * 2
    ) {
      pixel.setRed(255);
      pixel.setGreen(127);
    }
    if (
      pixel.getY() >= (rainbow.getHeight() / 6) * 2 &&
      pixel.getY() < (rainbow.getHeight() / 6) * 3
    ) {
      pixel.setRed(255);
      pixel.setGreen(255);
    }
    if (
      pixel.getY() >= (rainbow.getHeight() / 6) * 3 &&
      pixel.getY() < (rainbow.getHeight() / 6) * 4
    ) {
      pixel.setGreen(255);
    }
     if (
      pixel.getY() >= (rainbow.getHeight() / 6) * 4 &&
      pixel.getY() < (rainbow.getHeight() / 6) * 5
    ) {
      pixel.setBlue(255);
     }
    if (
      pixel.getY() >= (rainbow.getHeight() / 6) * 5 &&
      pixel.getY() < (rainbow.getHeight() / 6) * 6
    ) {
      pixel.setRed(148);
      pixel.setBlue(211);
     }
  }
}


function doClear() {
clear.drawTo(canvas);
}



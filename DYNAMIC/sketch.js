// Recoding project 2022
// T. DEBEAUNE et W. GERVAIS
// Vera Molnar - Square Structures

// DYNAMIC Version (V5)

let s=1;

function setup() {
  let img = createCanvas(650,650);
  //saveCanvas('img', 'png');
}

function draw() {
  frameRate(10);
  background(220);
  scale(1.5,1.5,0);
  DrawMesh (6,6);
}

// Draw n superposed quadrangles (based on 40*40 squares) position i-column, j-row in the Mesh
function DrawSquare(n, i, j) {
  push(); 
    noFill();
    translate(60*i, 60*j, 0); // put it on i-column, j-row, with a 20px "distance" between 2 quads

    for (let k=0; k<n; k++) {  // n times
      let dispersion = [];
      for (let d=0; d<8; d++) { // generate the dispersion array, filled with 8 random relative integers which will be the dispersions around the 8 coordinates
        let disp = int (random(-12, 15));
        dispersion.push(disp);
      }
      
      
// draw the quadrangle :
      
      if (s==1) {
         stroke(20*(i+j+1)+50,20*i+50,15*j+50); 
      }
      if (s==2) {
         stroke(15*(j+1), 15*(i+j+1)+50, 20*(i+1)+60); 
      }
      if (s==3) {
         stroke(0,0,0); 
      }
      if (s==4) {
        stroke(20*(i+j+1)+50,0,0);
      }
      if (s==5) {
        stroke(0,20*(i+j+1)+50,0);
      }
      if (s==6) {
        stroke(0,0, 20*(i+j+1)+50);
      }
      if (s==7) {
        stroke(15*(i+j+1), 15*(i+j+1), 15*(i+j+1));
      }
      
quad(40+dispersion[0],40+dispersion[1],80+dispersion[2],40+dispersion[3],80+dispersion[4],80+dispersion[5],40+dispersion[6],80+dispersion[7]);

    }
  
  pop();
}

// Draw the i*j mesh of n superposed quadrangles
function DrawMesh(w,h) {
  
  let quad_amount;
  strokeWeight(0.7);
  
 for (let j=0; j<h/2; j++) {
      for (let i=w-1; i>=0; i--) {
        ijquad_amount=50-DistIJ(i,j)/8; // increasing from right to left (-i), keep the number increasing from row to row (w*j), as in the original artwork (*2)
        
        // 3 first lines (brown)
        //stroke("#8f746d");
        DrawSquare(2*ijquad_amount,i,j);
        
      }
  }
  
   for (let j=0; j<h/2; j++) {
      for (let i=w-1; i>=0; i--) {
        ijquad_amount=50-DistIJ(w-1-i, h-1-j)/8; // split in 2 the previous amount (/2) to draw half brown and half black
    
        // 3 last lines (brown)
        //stroke("#8f746d");
        DrawSquare(ijquad_amount, w-1-i, h-1-j); // positions = start bottom right
        
        // 3 last lines (black)
        //stroke("#515757");
        DrawSquare(ijquad_amount, w-1-i, h-1-j);
    
      }
  }
  
}

// Calculates the distance the mouse and the i,j cell's center
function DistIJ(i, j) {
  let X = i*90 + 90;
  let Y = j*90 + 90;
  return sqrt((X-mouseX)*(X-mouseX) + (Y-mouseY)*(Y-mouseY));
}

// Updates s when clicked
function mouseClicked() {
  s++; 
  if (s===8) {
    s=1;
  } 
}
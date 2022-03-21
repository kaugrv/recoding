// Recoding project 2022
// T. DEBEAUNE et W. GERVAIS
// Vera Molnar - Square Structures

// DYNAMIC Version (V1)

function setup() {
  let img = createCanvas(700, 700);
  //saveCanvas('img', 'png');
  
}

function draw() {
  frameRate(10);
  background(220);
  scale(1.5,1.5,0);
  DrawMesh (6,6);
}

// Draw n superposed quadrangles (based on 40*40 squares)
// Position i-column, j-row in the Mesh

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
       stroke(20*(i+j),20*i,20*j); // color gradient
      
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
        ijquad_amount=DistIJ(i,j)/10; // increasing from right to left (-i), keep the number increasing from row to row (w*j), as in the original artwork (*2)
        
        // 3 first lines (brown)
        //stroke("#8f746d");
        DrawSquare(ijquad_amount,i,j);
        
        console.log(DistIJ(1,1));
      }
  }
  
   for (let j=0; j<h/2; j++) {
      for (let i=w-1; i>=0; i--) {
        ijquad_amount=DistIJ(w-1-i, h-1-j)/20; // split in 2 the previous amount (/2) to draw half brown and half black
    
        // 3 last lines (brown)
        //stroke("#8f746d");
        DrawSquare(ijquad_amount, w-1-i, h-1-j); // positions = start bottom right
        
        // 3 last lines (black)
        //stroke("#515757");
        DrawSquare(ijquad_amount, w-1-i, h-1-j);
    
      }
  }
  
}

function DistIJ(i, j) {
  let X = i*90 + 90;
  let Y = j*90 + 90;
  return sqrt((X-mouseX)*(X-mouseX) + (Y-mouseY)*(Y-mouseY));
  
}
// Recoding project 2022
// T. DEBEAUNE et W. GERVAIS
// Vera Molnar - Square Stuctures

// Static Version (V1)

function setup() {
  let img = createCanvas(700, 700);
  background(220);
  scale(1.5,1.5,0);
  DrawMesh(3,6,6);
  
  //saveCanvas('img', 'png');
  

}

// Draw n superposed quadrangles (based on 40*40 squares)
// position i-column, j-line in the Mesg
function DrawSquare(n, i, j) {
  push(); 
    noFill();
    translate(55*i, 55*j, 0); // put it on i-column, j-column, with a 20px distance between 2 quads

    for (let k=0; k<n; k++) { 
      let dispersion = [];

      for (let d=0; d<8; d++) { // generate the dispersion array, filled with 8 random relative integers which will be the dispersions around the 8 coordinates
        let disp = int (random(-10,10));
        dispersion.push(disp);
      }
      
      stroke(20*(i+j),20*i,20*j); // color gradient
      
// draw the quadrangle :
      quad(40+dispersion[0],40+dispersion[1],80+dispersion[2],40+dispersion[3],80+dispersion[4],80+dispersion[5],40+dispersion[6],80+dispersion[7]);

    }
  
  pop();
}

// Draw the i*j mesh of n superposed quadrangles
function DrawMesh(n,w,h) {
  for (let i=0; i<w; i++) {
    for (let j=0; j<h/2; j++) {
        DrawSquare(2*(i+j)+2,i,j);
        DrawSquare(2*(i+j)+2,w-1-i, h-1-j);
    }
  }
  
}
function setup() {
  createCanvas(700, 700);
  background(220);
  TraceMaille(5, 10,5);
}

function draw() {
}

// Trace n quadrilatères aléatoires superposés, basés sur carrés 40*40
// en colonne i, ligne j
function TraceCarre(n, i, j) {
  push(); 
    noFill();
    translate(60*i, 60*j, 0); // place en colonne i, ligne j, écarts de 20 entre les quadrilatères

    for (let k=0; k<n; k++) { 
      let dispersion = [];

      for (let d=0; d<8; d++) { // on génère "dispersion", un tableau de 8 entiers relatifs aléatoires = les 8 dispersions des coordonnées du quadrilatère
        let disp = int (random(-10,10));
        dispersion.push(disp);
      }
      
      stroke(20*i,20*j,20*(i+j)); // dégradé de couleurs
      
// on trace le quadrilatère :
      quad(40+dispersion[0],40+dispersion[1],80+dispersion[2],40+dispersion[3],80+dispersion[4],80+dispersion[5],40+dispersion[6],80+dispersion[7]);

    }
  
  pop();
}

// Trace une maille de w*h quadrilatères aléatoires (superposition de n)
function TraceMaille(n,w,h) {
  for (let i=0; i<w; i++) {
    for (let j=0; j<h; j++) {
        TraceCarre(n,i,j);
    }
  }
  
}

// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
 function Form(couleur, epaisseur ){
     this.couleur=couleur;
     this.epaisseur=epaisseur;
 }

function Line(couleur, epaisseur, startX, startY, endX, endY){
    Form.call(this, couleur, epaisseur);
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;

}

function Rectangle(couleur, epaisseur, startX, startY, longueur, largeur){
    Form.call(this, couleur, epaisseur);
    this.startX = startX;
    this.startY = startY;
    this.longueur = longueur;
    this.largeur = largeur;
}

function Drawing(){
    this.forms = new Array();
}

// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
 function Form(couleur, epaisseur ){
     this.couleur=couleur;
     this.epaisseur=epaisseur;
 }

function Line( startX, startY, endX, endY, epaisseur, couleur){
    Form.call(this, couleur, epaisseur);
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;

}

function Rectangle(startX, startY, longueur, largeur, epaisseur,  couleur){
    Form.call(this, couleur, epaisseur);
    this.startX = startX;
    this.startY = startY;
    this.longueur = longueur;
    this.largeur = largeur;
}

function Drawing(){
    this.forms = new Array();
}
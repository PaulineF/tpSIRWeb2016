
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
    this.endX = longueur;
    this.endY = largeur;
}

function Cercle (centerX, centerY, radius, epaisseur, couleur ){
	Form.call(this, couleur, epaisseur);
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	
}

function Drawing(){
    this.forms =[];
	this.addShape = function(shape){
		this.forms.push(shape);
	};
	this.removeShape = function(id){
		this.forms.splice(id,1);
	};
}
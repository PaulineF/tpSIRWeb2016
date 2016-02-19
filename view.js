// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.rect(this.startX, this.startY, this.endX, this.endY);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
//TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();

};

Cercle.prototype.paint = function(ctx) {
	ctx.beginPath();
	ctx.arc(this.centerX, this.centerY, this.radius,0,2*Math.PI,true);
	ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
}


Drawing.prototype.paint = function(ctx) {
 
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


Drawing.prototype.updateShapeList = function(shape){
	
	/****Variables****/
	//Obtenir la liste a modifier a l'aide de son id
	var list = document.getElementById('shapeList');
	//Creation de l'element li (item de la liste)
	var li = document.createElement('li');
	//Creation d'un id pour les li et boutons
	var id = list.childNodes.length;
	//Creation de l'element bouton qui permetra de suprimer les formes
	var bouton = document.createElement('button');
	//Creation element span
	var span = document.createElement('span');
	//Position debut X
	var sx = shape.startX;
	//Position debut Y
	var sy = shape.startY;
	//Position final X
	var ex = shape.endX;
	//Position final Y
	var ey = shape.endY;
	
	/****Bouton effacer*****/
	//On change l'id du bouton 
	bouton.setAttribute('id', id);
	//Changement de l'attribut class
	bouton.setAttribute('class','btn btn-default')
	//On ajoute l'icone "croix" au span
	span.setAttribute('class','glyphicon glyphicon-remove-sign');
	//On ajoute le span au bouton
	bouton.appendChild(span);
	//Function onclick
	bouton.setAttribute('onClick', 'drawing.deleteShape('+id+')');
	
	/***Elements li****/
	//On ajoute le bouton au item li
	li.appendChild(bouton);
	
	
	if (shape instanceof Rectangle){
		//texte pour un rectangle
		li.appendChild(document.createTextNode('Rectangle' +'('+ sx+','+sy+','+ex+','+ey+')'));
		
	} else if(shape instanceof Line){
		//texte pour une ligne
		li.appendChild(document.createTextNode('Line' +'('+ sx+','+sy+','+ex+','+ey+')'));
	} else {
		//texte pour un cercle
		li.appendChild(document.createTextNode('Cercle' +'('+ shape.centerX+','+shape.centerY+','+shape.radius+')'));
	}
	
	//On change l'attribut id du li
	li.setAttribute('id', 'li'+id);
	//On change l'attribut class du li
	li.setAttribute('class', 'list-group-item');
	
	/****La liste de formes****/
	//On ajoute l'element li au liste
	list.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){
	//Obtenir l'element li qui contient le bouton que l'utilisateur a appuye pour effacer une forme
	var li = document.getElementById('li'+id);
	//Obtenir l'index de li choisis
	var index = $(li).index();
	//Effacer l'element li de l liste
	li.remove();
	//Effacer la forme qui a le meme index que la ligne (li) effacee. La forme est effacé du array 'forms'
	this.removeShape(index);
	//Effacer tout le contenu du canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Redessiner le contenu du array 'forms'
    drawing.paint(ctx);
   
};
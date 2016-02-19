//hi

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
	
	
	var list = document.getElementById('shapeList');
	var li = document.createElement('li');
	var id = list.childNodes.length;
	var bouton = document.createElement('button');
	var span = document.createElement('span');
	var sx = shape.startX;
	var sy = shape.startY;
	var ex = shape.endX;
	var ey = shape.endY;
	
	
	
	bouton.setAttribute('id', id);
	bouton.setAttribute('class','btn btn-default')
	span.setAttribute('class','glyphicon glyphicon-remove-sign');
	bouton.appendChild(span);
	li.appendChild(bouton);
	bouton.setAttribute('onClick', 'drawing.deleteShape('+id+')');
	
	if (shape instanceof Rectangle){
		li.appendChild(document.createTextNode('Rectangle' +'('+ sx+','+sy+','+ex+','+ey+')'));
		
	} else if(shape instanceof Line){
		
		li.appendChild(document.createTextNode('Line' +'('+ sx+','+sy+','+ex+','+ey+')'));
	} else {
		li.appendChild(document.createTextNode('Cercle' +'('+ shape.centerX+','+shape.centerY+','+shape.radius+')'));
	}
	
	li.setAttribute('id', 'li'+id);
	li.setAttribute('class', 'list-group-item');
	list.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){
	
	var li = document.getElementById('li'+id);
	var index = $(li).index();
	li.remove();
	this.removeShape(index);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawing.paint(ctx);
   
};
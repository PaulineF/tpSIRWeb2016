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


Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(shape){
	
	var list = document.getElementById('shapeList');
	var li = document.createElement('li');
	var id = list.childNodes.length;
	
	li.innerHTML += "<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>";
	if (shape instanceof Rectangle){
		li.appendChild(document.createTextNode(' '+id+' '+'Rectangle'));
		
	
	} else if(shape instanceof Line){
		
		li.appendChild(document.createTextNode(' '+id+' '+'Line'));
	}
	li.setAttribute('id', 'li'+id);
	li.setAttribute('class', 'list-group-item');
	list.appendChild(li);
}
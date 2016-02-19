
var editingMode = { rect: 0, line: 1, cercle: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);



	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, currLineWidth, currColour);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
		}else {
			var radius = Math.sqrt(Math.pow(DnD.finalX - DnD.initialX,2)+Math.pow(DnD.finalY - DnD.initialY,2));
			var cercle = new Cercle(DnD.initialX, DnD.initialY, radius,currLineWidth, currColour);
		}



	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, currLineWidth, currColour);
			rec.paint(ctx);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
			line.paint(ctx);
		}else {
			var radius = Math.sqrt(Math.pow(DnD.finalX - DnD.initialX,2)+Math.pow(DnD.finalY - DnD.initialY,2));
			var cercle = new Cercle(DnD.initialX, DnD.initialY, radius,currLineWidth, currColour);
			cercle.paint (ctx);
		}

	}.bind(this);

	this.onInteractionEnd = function(DnD){
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, currLineWidth, currColour);
			drawing.updateShapeList(rec);
			rec.paint(ctx);
			console.log(rec);
			drawing.addShape(rec);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
			drawing.updateShapeList(line);
			line.paint(ctx);
			console.log(line);
			drawing.addShape(line);
			 
		}else{
			var radius = Math.sqrt(Math.pow(DnD.finalX - DnD.initialX,2)+Math.pow(DnD.finalY - DnD.initialY,2));
			var cercle = new Cercle(DnD.initialX, DnD.initialY, radius,currLineWidth, currColour);
			drawing.updateShapeList(cercle);
			cercle.paint (ctx);
			console.log(cercle);
			drawing.addShape(cercle);
		}
		
		 console.log(drawing.forms);
	}.bind(this);
};



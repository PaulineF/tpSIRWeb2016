
var editingMode = { rect: 0, line: 1 };

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
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
		}



	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, currLineWidth, currColour);
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
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
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, currLineWidth, currColour);
			drawing.updateShapeList(line);
			line.paint(ctx);
			 console.log(line);
		}
	}.bind(this);
};



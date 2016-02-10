
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
		var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, 5, '#ff0000');


	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, 5, '#ff0000');


	}.bind(this);

	this.onInteractionEnd = function(DnD){
		var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, 5, '#ff0000');
		console.log(DnD.finalX- DnD.initialX)
		rec.paint(ctx);

	}.bind(this);
};



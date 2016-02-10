
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
		var color = $('#colour').val();
		var width = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, width, color);
			console.log("RECT")
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, width, color);
		}



	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		var color = $('#colour').val();

		var width = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, width, color);
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, width, color);
		}

	}.bind(this);

	this.onInteractionEnd = function(DnD){
		var color = $('#colour').val();

		var width = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.initialX, DnD.initialY, DnD.finalX- DnD.initialX, DnD.finalY- DnD.initialY, width, color);

			rec.paint(ctx);
		}else{
			var line = new Line(DnD.initialX, DnD.initialY, DnD.finalX, DnD.finalY, width, color);

			line.paint(ctx);
		}
	}.bind(this);
};




// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.initialX = 0;
    this.initialY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.isPressed = false;

	// Developper les 3 fonctions gérant les événements
    this.onPress = function (evt){
        if(!this.isPressed){
            this.isPressed = true;
            var pos = getMousePosition(canvas, evt);
            this.initialX = pos.x;
            this.initialY = pos.y;
            console.log("initialX : " + this.initialX +" // initialY : " + this.initialY);
        }
    }.bind(this);

    this.onMove = function(evt){
        if(this.isPressed){
            var pos = getMousePosition(canvas, evt);
            this.finalX = pos.x;
            this.finalY = pos.y;
            console.log("Move");

            //console.log("initialX : " + this.initialX +" // initialY : " + this.initialY);
            console.log("finalX : " + this.finalX +" // finalY : " + this.finalY);
        }
    }.bind(this);


    this.onUp = function (evt){
        if(this.isPressed){
            this.isPressed = false;
            var pos = getMousePosition(canvas, evt);
            this.finalX = pos.x;
            this.finalY = pos.y;

            console.log("finalX : " + this.finalX +" // finalY : " + this.finalY);
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.onPress, false);
    canvas.addEventListener('mousemove', this.onMove, false);
    canvas.addEventListener('mouseup', this.onUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




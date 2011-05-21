var LetterConcealer= function(letter) {
	var hidden= letter;
	var display= '_';
	
	this.show= function() {
		return display;
	};
	
	this.guess= function(guess) {		
		if(hit= (guess == hidden))
			reveal();
		return hit;
	}
	
	var reveal= function() {
		display= hidden;
	};
};

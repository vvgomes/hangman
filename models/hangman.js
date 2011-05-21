var Hangman= function() {
	var generator= new Generator();
	var concealer;
	var chances;
	var ended;

	//view:
	var hiddenWordDisplay= new HiddenWordDisplay();
	var image= new Image();

	this.start= function() {
		word= generator.giveMeAWord();
		concealer= new WordConcealer(word);
		hiddenWordDisplay.update(concealer.show());
		chances= 6;
		ended= false;
		showGameArea();
	};
	
	this.guess = function(letter) {
		if(ended) 
			return;
		concealer.guess(letter) ? hit() : mistake();		
	};
	
	var disable= function(link) {
		link.onclick= '#';
		link.style.color= 'red';
	};
	
	var hit= function(letter) {
		hiddenWordDisplay.update(concealer.show());
		if(!concealer.hasMoreToReveal())
			win();
	};
	
	var mistake= function() {
		image.showNext();
		if(--chances == 0)
			loose();
	};
	
	var win= function() {
		ended= true;
		alert('You Kick Asses!');
	};
	
	var loose= function() {
		ended= true;
		alert('Looooser!');
	};

	var ref = this;
	var showGameArea= function() {
		image.show();		
		$('#game_area').show();
		$('#letters a').click(function(e) {
			letter = this.innerHTML;
			ref.guess(letter);
			disable(this);
			e.preventDefault();
		});
		$('#letters a').css('color', 'blue');
	};
};

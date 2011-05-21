var Image= function() {
	var index;
	var file='http://www.inf.pucrs.br/~ai190536/hangman/images/#.jpg';
	
	this.show= function() {
		$('#image').attr('src', file.replace('#', index=0));
	};
	
	this.showNext= function() {
		$('#image').attr('src', file.replace('#', ++index));
	};
};

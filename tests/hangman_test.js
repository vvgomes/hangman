var HangmanTest= function(Y) {
	return {
		name: 'HangmanTest',
	
		setUp: function() {
			$('<div/>').attr({id: 'hangman'}).appendTo('body').hide();
		
			this.generator= Y.Mock();
			this.concealer= Y.Mock();
			this.image= Y.Mock();
			this.game= new Hangman(this.generator, this.concealer, this.image);
		},
	
		tearDown: function() {
			Y.Mock.verify(this.generator);
			Y.Mock.verify(this.concealer);
			Y.Mock.verify(this.image);
		},
	
		testShouldStartNewGame: function() {
			Y.Mock.expect(this.generator, {
				method: 'giveMeAWord', 
				returns: 'DWIGHT'                            
			});
		
			Y.Mock.expect(this.image, {
				method: 'show'
			});
		
			this.game.start();
		},
	
		testShouldTryAGuess: function() {
			Y.Mock.expect(this.concealer, {
				method: 'guess',
				args: ['W'],
				returns: true
			});
		
			Y.Mock.expect(this.ocultador, {
				method: 'revelouTudo',
				returns: false
			});
		
			this.game.guess('W');
		}
	};
};

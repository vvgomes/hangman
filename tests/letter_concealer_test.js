var LetterConcealerTest= function(Y) {
	return {
		name: 'LetterConcealerTest',
	
		testShouldHideALetter: function() {
			concealer= new LetterConcealer('V');
			Y.Assert.areEqual('_', concealer.show());
		},
		
		testShouldTryARightGuessAndReveal: function() {
			concealer= new LetterConcealer('V');
			Y.Assert.isTrue(concealer.guess('V'));
			Y.Assert.areEqual('V', concealer.show());
		}, 
		
		testShouldTryAWrongGuessAndNotReveal: function() {
			concealer= new LetterConcealer('V');
			Y.Assert.isFalse(concealer.guess('B'));
			Y.Assert.areEqual('_', concealer.show());
		}
	};
};

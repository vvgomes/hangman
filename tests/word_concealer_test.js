var WordConcealerTest= function(Y) {
	return {
		name: 'WordConcealerTest', 
	
		testShouldHideAWord: function() {
			concealer= new WordConcealer('DWIGHT');
			Y.Assert.areEqual('_ _ _ _ _ _', concealer.show());
		},
		
		testShouldTryARightGuessAndRevealALetter: function() {
			concealer= new WordConcealer('DWIGHT');
			Y.Assert.isTrue(concealer.guess('G'));
			Y.Assert.areEqual('_ _ _ G _ _', concealer.show());
		},
		
		testShouldTryAWrongGuessAndRevealNothing: function() {
			concealer= new WordConcealer('DWIGHT');
			Y.Assert.isFalse(concealer.guess('B'));
			Y.Assert.areEqual('_ _ _ _ _ _', concealer.show());
		},

		testShouldHaveMoreToReveal: function() {
			concealer= new WordConcealer('DWIGHT');			
			Y.Assert.isTrue(concealer.hasMoreToReveal());		
		},
	
		testShouldHaveNothingMoreToReveal: function() {
			concealer= new WordConcealer('DWIGHT');
			concealer.guess('D');
			concealer.guess('W');
			concealer.guess('I');
			concealer.guess('G');
			concealer.guess('H');
			concealer.guess('T');
			Y.Assert.isFalse(concealer.hasMoreToReveal());		
		}
	};
};

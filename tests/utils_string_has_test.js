var StringHasTest= function(Y) {
	return {
		name: 'StringHasTest',
	
		testShouldHasAChar: function() {
			Y.Assert.isTrue('gorilla'.has('o'));
		},
		
		testShouldNotHasAChar: function() {
			Y.Assert.isFalse('gorilla'.has('b'));
		}
	};
};

var GeneratorTest= function(Y) {
	return {
		name: 'GeneratorTest',
	
		testShouldGenerateAWord: function() {
			generator= new Generator();
			word= generator.giveMeAWord();
			Y.Assert.isNotNull(word);
			Y.Assert.isString(word);
		}
	};
};

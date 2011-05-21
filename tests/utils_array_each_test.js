var ArrayEachTest= function(Y) {
	return {
		name: 'ArrayEachTest',
	
		testShouldIterateOverArrayAndDoSomething: function() {
			sum= 0;
			[0, 1, 2].each(function(e){
				sum+= e; 
			});
			Y.Assert.areEqual(3, sum);
		}
	};
};

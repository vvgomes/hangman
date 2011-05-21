var HiddenWordDisplayTest= function(Y) {
	return {
		name: 'HiddenWordDisplayTest',
		
		setUp: function() {
			$('<span/>').attr({id: 'hidden_word'}).appendTo('body').hide();
		},

		testShouldUpdateDisplay: function() {
			new HiddenWordDisplay().update('boo');
			Y.Assert.equals('boo', $('#hidden_word').html());
		}
	};
};

var ImageTest= function(Y) {
	return {
		name: 'ImageTest',
	
		setUp: function() {
			$('<img/>').attr({id: 'image', src: ''}).appendTo('body').hide();
		},
	
		testShouldDisplayFirst: function() {
			image= new Image();
			image.show();
			Y.Assert.isNotNull($('#image').attr('src').match(/0.jpg$/));
		},
	
		testShouldDisplayNext: function() {
			image= new Image();
			image.show();
			image.showNext();
			Y.Assert.isNotNull($('#image').attr('src').match(/1.jpg$/));
		}
	};
};

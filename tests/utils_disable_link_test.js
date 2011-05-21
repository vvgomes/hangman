var UtilsDisableLinkTest= function(Y) {
	return {
		name: 'UtilsDisableLinkTest',
	
		setUp: function() {
			link= {id: 'link', style: {color: ''}};
		},
	
		testShouldDisableLink: function() {
			disable(link);
			Y.Assert.areEqual('#', link.onclick);
		},

		testShouldChangeLinkCollorToRed: function() {
			disable(link);
			Y.Assert.areEqual('red', link.style.color);
		}
	};
};

var Generator= function() {
	var words= ['DWIGHT', 'PAM', 'JIM', 'MICHAEL'];
	
	this.giveMeAWord= function() {
		drawn= chooseNumberBetween(0, words.length);
		return words[drawn];
	};
	
	var chooseNumberBetween= function(first, last) {
		return Math.floor((last-first-1)*Math.random())+first;
	};
};

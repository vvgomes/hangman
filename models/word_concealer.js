var WordConcealer= function(word) {
	var hidden= word;
	var hiddenLetters= createHiddenLetters(hidden);
	
	this.show= function() {
		letters= [];
		hiddenLetters.each(function(e){
			letters.push(e.show());
		});
		return letters.join(' ');
	};
	
	this.guess= function(letter) {
		var hitCount= 0;		
		hiddenLetters.each(function(e){
			hitCount+= e.guess(letter)? 1 : 0;
		});
		return hitCount > 0;
	};

	this.hasMoreToReveal= function() {
		return this.show().has('_');
	};

	function createHiddenLetters(h) {
		list= [];
		h.split('').each(function(e){
			list.push(new LetterConcealer(e));
		});
		return list;
	}
};

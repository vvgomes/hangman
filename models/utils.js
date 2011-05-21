Array.prototype.each= function(f) {
	i= -1;
	while(++i < this.length) 
		f(this[i]);
};

String.prototype.has= function(c) {
	return this.indexOf(c) >= 0;
};

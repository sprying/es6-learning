"use strict";

var obj = {
	cur: 1,
	next() {
		return {
			value: this.cur++,
			done: false
		};
	},
	return() {
		this.cur = 0;
		console.log('execute iterator\'s method of return');
		return {
			done: true
		};
	},
	[Symbol.iterator]() {
		return this;
	}
};
for (let v of obj) {
	console.log(v);
	//throw new Error();
	if (v > 10) {
		break;
	}
}
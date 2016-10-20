'use strict';

/**
 * 在nodeJs下不执行return
 * chrome52下执行return
 * @type {{cur: number}}
 */
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
	//throw new Error();
	if (v > 10) {
		break;
	}
	if (v == 8) {
		continue;
	}
	console.log(v);
}
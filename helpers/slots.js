function getEpochTime(time) {
	if (time === undefined) {
		time = (new Date()).getTime();
	}
	var d = new Date(Date.UTC(2014, 4, 2, 0, 0, 0, 0));
	var t = d.getTime();
	return Math.floor((time - t) / 1000);
}

//function epochTime() {
//	var d = new Date(Date.UTC(2014, 4, 2, 0, 0, 0, 0));
//	var t = Math.floor(d.getTime() / 1000);
//
//	return t;
//}

module.exports = {

	interval: 10,

	delegates: 3,

	getTime: function (time) {
		return getEpochTime(time);
	},

	getRealTime: function (epochTime) {
		if (epochTime === undefined) {
			epochTime = this.getTime()
		}
		var d = new Date(Date.UTC(2014, 4, 2, 0, 0, 0, 0));
		var t = Math.floor(d.getTime() / 1000) * 1000;
		return t + epochTime * 1000;
	},

	getSlotNumber: function (epochTime) {
		if (epochTime === undefined) {
			epochTime = this.getTime()
		}
		return Math.floor(epochTime / this.interval);
	},

	getSlotTime: function (slot) {
		return slot * this.interval;
	},

	getNextSlot: function () {
		var slot = this.getSlotNumber();

		return slot + 1;
	},

	getLastSlot: function (nextSlot) {
		return nextSlot + this.delegates;
	}
}
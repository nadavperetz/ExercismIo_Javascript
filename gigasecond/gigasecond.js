var Gigasecond = function (date) {
    this.original_date = date;
};

Gigasecond.prototype.date = function() {
    const gigaseconds = (Math.pow(10, 9));
    const gigaseconds_in_miliseconds = (Math.pow(10, 9))*1000;
    return new Date(this.original_date.getTime() + gigaseconds_in_miliseconds)
};


module.exports = Gigasecond;
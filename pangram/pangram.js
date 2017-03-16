var Pangram = function(text) {
    this.original_text = text;

};


Pangram.prototype.isPangram = function () {

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    var original_text_to_lower = this.original_text.toLowerCase();

    //Remove non-ascii characters
    var clean_text = original_text_to_lower.replace(/[^\x00-\x7F]/g, "");

    //Cast to array
    var original_text_array = clean_text.split('');

    var array_index = -1;

    for (var idx = 0; idx < original_text_array.length; idx++) {
        array_index = alphabet.indexOf(original_text_array[idx]);
        if (array_index > -1) {
            alphabet.splice(array_index, 1);
        }
    }

    return (alphabet.length == 0)
};

module.exports = Pangram;
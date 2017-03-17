var Isogram = function(text) {
    this.original_text = text;


    this.isIsogram = function () {

        var alphabet = [];

        //Clean input
        var original_text_to_lower = this.original_text.replace(/\s+/g, '').replace(/\-/g, '').toLowerCase();

        console.log(original_text_to_lower);
        //Cast to array
        var original_text_array = original_text_to_lower.split('');

        var array_index = -1;

        // Check if is in alphabet array, return false if not
        for (var idx = 0; idx < original_text_array.length; idx++) {
            array_index = alphabet.indexOf(original_text_array[idx]);
            if (array_index < 0) {
                alphabet.push((original_text_array[idx]));
            }
            else
                return false
        }

        return true
    };
};

module.exports = Isogram;
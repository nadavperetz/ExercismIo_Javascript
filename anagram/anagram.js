var create_dict_that_count_letters = function (key) {
    var dicio = {};
    for (var idx=0; idx < key.length; idx ++){
        var unique = key[idx];
        if (unique in dicio)
            dicio[unique] = dicio[unique] + 1;
        else
            dicio[unique] = 1;
    }
    return dicio;
};

var Anagram = function (subject) {
    this.subject = subject.toLowerCase();
    this.count_letters = create_dict_that_count_letters(this.subject);


    this.matches = function (matches_array) {

        // SIGNATURE
        // Check parameters type, because of different signatures
        if (matches_array.constructor !== Array){
            matches_array = [matches_array];
            for (var idx_params = 1; idx_params < arguments.length; idx_params ++){
                matches_array.push(arguments[idx_params]);
            }

        }

        return this.run(matches_array);
    };

    this.run = function (matches_array) {
        var confirmed_matches_array = [];
        var word_temp_count_letters = {};
        for (var match in matches_array) {
            if (matches_array.hasOwnProperty(match)) {

                word_temp_count_letters = create_dict_that_count_letters(matches_array[match].toLowerCase());

                if (this.compare_with_count_letters_dict(word_temp_count_letters)) {
                    if (matches_array[match].toLowerCase() !== this.subject)
                        confirmed_matches_array.push(matches_array[match]);
                }
            }
        }

        return confirmed_matches_array
    };

    this.compare_with_count_letters_dict = function (match_dict) {
        var value = -1;

        //Only continues if dict keys have same length
        if (Object.keys(match_dict).length != Object.keys(this.count_letters).length)
            return false;
        for (var key in match_dict) {
            if (match_dict.hasOwnProperty(key)) {
                value = match_dict[key];
                if (!(key in this.count_letters)){
                    return false
                }
                else{
                    if (this.count_letters[key] !== value)
                        return false;
                }
            }
        }
        return true;
    }
        
};

module.exports = Anagram;
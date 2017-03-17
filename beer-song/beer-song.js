var BeerSong = function () {
    const verse_plural_part_a = " bottles of beer on the wall, ";
    const verse_plural_part_b = " bottles of beer.\n";
    const verse_plural_part_c = "Take one down and pass it around, ";
    const verse_plural_part_d = " bottles of beer on the wall.\n";

    const verse_singular_part_a = " bottle of beer on the wall, ";
    const verse_singular_part_b = " bottle of beer.\n";

    const verse_singular_part_d = " bottle of beer on the wall.\n";

    const second_verse_one_bottle = "Take it down and pass it around, no more bottles of beer on the wall.\n";

    const verse_end_part_a = "No more bottles of beer on the wall, no more bottles of beer.\n";
    const verse_end_part_b = "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    this.first_phrase = function (number) {
        // All plural
        if (number > 1)
            return number + verse_plural_part_a + number + verse_plural_part_b;
        // All singular
        else if (number === 1)
            return number + verse_singular_part_a + number + verse_singular_part_b;
        // End verse
        else
            return verse_end_part_a
    };

    this.second_phrase = function (number) {
        if (number > 2)
            return verse_plural_part_c + (number - 1) + verse_plural_part_d;
        else if (number === 2)
            return verse_plural_part_c + (number - 1) + verse_singular_part_d;
        else if (number === 1)
            return second_verse_one_bottle;
        else
            return verse_end_part_b

    };

    this.verse = function (number) {
        return (this.first_phrase(number) + this.second_phrase(number));
    };

    this.sing = function(start, end){
        end = end || 0;
        var answer = "";
        for (var idx = start; idx >= end; idx--){
            answer += this.verse(idx);
            if (idx !== end)
                answer += "\n";
        }
        return answer;


    }
};

module.exports = BeerSong;
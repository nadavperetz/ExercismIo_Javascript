var Hamming = function() {};

Hamming.prototype.compute = function(dna_one, dna_two) {
    if (dna_one.length != dna_two.length)
        throw new Error('DNA strands must be of equal length.');
    else{
        var counter = 0;
        for (var idx = 0; idx < dna_one.length; idx++){
            if (dna_one[idx]  != dna_two[idx])
                counter ++;
        }

    }
    return counter;
};

module.exports = Hamming;
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna_string) {
    var transcription = {"G": "C", "C": "G", "T": "A", "A": "U"};

    var rna_complement = "";

    for (var idx = 0; idx < dna_string.length; idx++){
        if (dna_string[idx] in transcription)
            rna_complement += transcription[dna_string[idx]];
        else
            throw new Error('Invalid input')
    }
    return rna_complement;

};

module.exports = DnaTranscriber;
var Bob = function () {

};

function check_if_is_number(char){
    console.log("CHAR   " + char);
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 )
        return true;
    return false;
}

function check_all_empty(text_input){
    for (var idx  = 0; idx < text_input.length; text_input++){
        if (text_input[idx] != ' ' || check_if_is_number(text_input[idx]))
            return false
    }
    return true

}

function check_if_all_uper_case(text_input, minus_last){
    for (var idx  = 0; idx < text_input.length - minus_last; idx++){
        if ((text_input[idx] != text_input[idx].toUpperCase()) || check_if_is_number(text_input[idx])) {
            console.log('a');
            return false;
        }
    }
    return true

}

Bob.prototype.hey = function (input) {
    const conversation_dict = {
        'question' : 'Sure.',
        'yell' : 'Whoa, chill out!',
        'not_saying' : 'Fine. Be that way!',
        'else' : 'Whatever.'
    };

    var conversation;

    switch (input.length == 0 ? '': input[(input.length-1)]){
        case '?':
            console.log(0);
            if(check_if_all_uper_case(input, 1))
                conversation = conversation_dict.yell;
            else
                conversation = conversation_dict.question;
            break;
        case '!':
            console.log(2);
            conversation = conversation_dict.yell;
            break;
        case  '':
            console.log(3);
            conversation = conversation_dict.not_saying;
            break;
        default:
            console.log(4);
            if(check_all_empty(input))
                conversation = conversation_dict.not_saying;
            else if(check_if_all_uper_case(input, 0))
                conversation = conversation_dict.yell;
            else
                conversation = conversation_dict.else;
            break;

    }
    return conversation;

};

module.exports = Bob;
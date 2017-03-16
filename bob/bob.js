var Bob = function () {

    this.hey = function(input) {
        const conversation_dict = {
            'question': 'Sure.',
            'yell': 'Whoa, chill out!',
            'not_saying': 'Fine. Be that way!',
            'else': 'Whatever.'
        };

        input = input.trim();

        if (input === '')
            return conversation_dict.not_saying;

        if (input.match(/[a-zA-Z]/g) && input === input.toUpperCase())
            return conversation_dict.yell;

        if (input.endsWith('?'))
            return conversation_dict.question;

        return conversation_dict.else;

    };
}

module.exports = Bob;
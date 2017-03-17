var PhoneNumber = function (phone_number) {
    this.phone_number = phone_number;
    this.cleaned_number = this.phone_number.replace((/[^0-9]/g), '');

    this.number = function () {
        if (this.cleaned_number.length === 10)
            return this.cleaned_number;
        else if (this.cleaned_number.length === 11 && this.cleaned_number[0] === '1')
            return this.cleaned_number.slice(1, 11);
        else
            return '0000000000';

    };

    this.areaCode = function () {
        return this.cleaned_number.slice(0, 3);

    };

    this.toString = function () {
        return "(" + this.areaCode() + ") " + this.cleaned_number.slice(3, 6) + "-" + this.cleaned_number.slice(6);

    }



};

module.exports = PhoneNumber;
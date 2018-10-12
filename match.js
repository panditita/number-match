var numbersInLetters = {
    units: //0 to 29
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
            'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine'],

    tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

}
// Principales --------------------------------

/*
  Convierte a letras los números entre 0 y 29.
  Ejemplo: CifrasEnLetras.convertirUnidades(21,"femenino") --> "veintiuna"
*/

convertirUnidades = (unidades, genero) => {
    with (numbersInLetters) {
        var units = units == 21;
        return numbersInLetters[units]

    }
}

function numberToLetters(toMatch) {

    if (typeof toMatch === "string") {
        toMatch = parseInt(toMatch, 10);
    }
    else {
        toMatch = toMatch.toString(10);
    }
    return toMatch;
}

changeToWords = (num) => {
    var numbersInLetters = {
        units: //0 to 29
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
                'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine'],

        tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

    }
    var unit = num % 10;
    var ten = Math.floor(num / 10);
    if (num < 30) {
        return convertirUnidades(num);
    }
    else if (unit == 0) {
        return units[ten];
    }
    else {
        return tens[ten] + " y " + convertirUnidades(unit);
    }
}


console.log(changeToWords(15));

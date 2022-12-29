var deMath = {
  quotient: (numerator, denumerator) => { return Math.trunc(numerator / denumerator); },
  dequotient: (numerator, denumerator) => { return numerator - (denumerator * Math.trunc(numerator / denumerator)); },
  dec2num: (number, denumber) => {
    /* 
    dec2num: function to convert any decimal number to any available number type (currently: [biner, octal, hexadecimal])
    Usage: deMath.dec2num(numerator, denumerator)
           numerator    => first decimal number to be converted
           denumerator  => value of number type, accept [2 = biner, 8 = octal, 16 = hexadecimal]
    Example: deMath.dec2num(428, 16) => convert value '428' to number type[16] (hexadecimal) => return '1A2'
    */
    if (![2, 8, 16].includes(denumber)) {
      throw new Error(`Invaild denumber(${denumber}) value: expected value [2, 8, 16]`);
    } else {
      var numberator = number;
      var count = [];
      while (numberator > (denumber - 1)) {
        count.unshift(dequotient(numberator, denumber));
        numberator = quotient(numberator, denumber);
      };
      if (numberator < denumber) { count.unshift(numberator); };
      if (denumber = 16) {
        var recount = count.join();
        recount = recount.replaceAll('10', 'A').replaceAll('11', 'B').replaceAll('12', 'C').replaceAll('13', 'D').replaceAll('14', 'E').replaceAll('15', 'F');
        count = recount.split(',');
      };
      return count.join('');
    };
  },
  num2dec: (number, numbertype) => {
    /* 
    num2dec: opposite of dec2num, function to convert any available number type (currently: [biner, octal, hexadecimal]) to any decimal number
    Usage: deMath.num2dec(numerator, denumerator)
           numerator    => first any available number type number to be converted
           numbertype   => value of the specified number type from numerator, accept [2 = biner, 8 = octal, 16 = hexadecimal]
    Example: deMath.num2dec(1AB, 16) => convert value '1AB' as number type[16] (hexadecimal) to decimal => return '427'
    */
    if (![2, 8, 16].includes(numbertype)) {
      throw new Error(`Invaild numbertype(${numbertype}) value: expected value [2, 8, 16]`);
    } else {
      var arraynumber = String(number.toUpperCase()).split('');
      if (numbertype == 16) {
        var num = arraynumber.join();
        num = num.replaceAll('A', '10');
        num = num.replaceAll('B', '11');
        num = num.replaceAll('C', '12');
        num = num.replaceAll('D', '13');
        num = num.replaceAll('E', '14');
        num = num.replaceAll('F', '15');
        arraynumber = num.split(',');
      };
      var counter = 0;
      var counted = counter;
      var multiple = arraynumber.length - 1;
      while (counter < arraynumber.length) {
        counted += arraynumber[counter] * Math.pow(numbertype, multiple);
        counter += 1;
        multiple -= 1;
      };
      return counted;
    };
  }
};

// try here on console
//console.log(deMath.quotient(5, 8));
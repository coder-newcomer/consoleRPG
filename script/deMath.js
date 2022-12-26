var deMath = {
  quotient: (numerator, denumerator) => { return Math.trunc(numerator / denumerator); },
  dequotient: (numerator, denumerator) => { return numerator - (denumerator * Math.trunc(numerator / denumerator)); },
  dec2num: (number, denumber) => {
    /* 
    dec2num: function to convert any decimal number to any available
             number type (currently: [biner, octal, hexadecimal])
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
        recount = recount.replaceAll('10', 'A');
        recount = recount.replaceAll('11', 'B');
        recount = recount.replaceAll('12', 'C');
        recount = recount.replaceAll('13', 'D');
        recount = recount.replaceAll('14', 'E');
        recount = recount.replaceAll('15', 'F');
        count = recount.split(',');
      };
      return count.join('');
    };
  },
  num2dec: (number, numbertype) => {
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
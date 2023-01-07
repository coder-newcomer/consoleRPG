/**
 * 
 * deMath.js beta | Copyright © 2023 coder-newcomer\
 * A simple JavaScript library to processing advanced mathematical operation with single function.
 *
 * All features is embeded to native `Math` object. Use `Math.extends` to access all function.
 * 
 * The features still **incomplete** but it's works!
 */

// for large number, this script need BigInt

/**
 * Temporary stored data for this script, **do not modify to prevent unexpected behavior**. Can only modified by the script itself.
 */
var deMathTmp = { rnd: -1 };
Math.extends = {
  /**
   * Get the integer portion of a division.
   * @param {number} numerator Number to divide.
   * @param {number} denominator Divider.
   */
  quotient: (numerator, denominator) => { return Math.trunc(numerator / denominator); },

  /**
   * Get recent number from non-integer result of division // fck translation
   * @param {number} numerator Number to divide.
   * @param {number} denumerator Divider.
   */
  dequotient: (numerator, denumerator) => { return numerator - (denumerator * Math.trunc(numerator / denumerator)); },

  /**
   * Convert a decimal number to biner, octal, or hexadecimal.
   * @param {number} number Decimal number to convert.
   * @param {2|8|16} numbertype Converted number type: `2 = biner` | `8 = octal` | `16 = hexadecimal`.
   */
  dec2num: (number, numbertype) => {
    if (![2, 8, 16].includes(numbertype)) {
      throw new RangeError(`Invaild numbertype (${ numbertype }) value. Expected numbertype: 2 | 8 | 16`);
    } else {
      var numberator = number;
      var count = [];
      while (numberator > (numbertype - 1)) {
        count.unshift(dequotient(numberator, numbertype));
        numberator = quotient(numberator, numbertype);
      };
      if (numberator < numbertype) { count.unshift(numberator); };
      if (numbertype = 16) {
        var recount = count.join();
        recount = recount.replaceAll('10', 'A').replaceAll('11', 'B').replaceAll('12', 'C').replaceAll('13', 'D').replaceAll('14', 'E').replaceAll('15', 'F');
        count = recount.split(',');
      };
      return count.join('');
    };
  },

  /**
   * The opposite of dec2num, convert any biner, octal, or hexadecimal number type to decimal number.
   * @param {number} number Decimal number to convert.
   * @param {2|8|16} numbertype Converted number type: `2 = biner` | `8 = octal` | `16 = hexadecimal`.
   */
  num2dec: (number, numbertype) => {
    if (![2, 8, 16].includes(numbertype)) {
      throw new RangeError(`Invaild numbertype (${ numbertype }) value. Expected numbertype: 2 | 8 | 16`);
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
      /* Refactored to use for loop
      var counter = 0;
      var counted = counter;
      var multiple = arraynumber.length - 1;
      while (counter < arraynumber.length) {
        counted += arraynumber[counter] * Math.pow(numbertype, multiple);
        counter += 1;
        multiple -= 1;
      };
      */
      var counted = 0;
      var multiple = arraynumber.length - 1;
      for (let i = 0; i < arraynumber.length; i++) {
        counted += arraynumber[i] * Math.pow(numbertype, multiple);
        multiple -= 1;
      };
      return counted;
    };
  },

  /**
   * Returns a random number value from `min` to `max`, will return normal `Math.random()` if has no parameter defined.
   * @param {number} min Lowest minimal number. **Default:** `0`
   * @param {number} max Highest maximal number. **Default:** `min + 1`
   * @param {boolean|'int'} round Specify the way to round value. `true` = value rounded normally | `'int'` = the maximum is exclusive and the minimum is inclusive. **Default:** `false`
   * @param {boolean} different Value must be different each call (may working unexpectedly). **Default:** `false`
   */
  getRandom: (min, max, round, different) => {
    if (min == undefined) { min = 0; };
    if (max == undefined) { max = min - 1; };
    while (true) {
      var rand = deMathTmp.rnd;
      var random = Math.random();
      switch (round) {
        case undefined:
        case false:
          deMathTmp.rnd = random * (max - min) + min;
          break;
        case true:
          deMathTmp.rnd = Math.round(random * (max - min) + min);
          break;
        case 'int':
          min = Math.ceil(min);
          max = Math.floor(max);
          deMathTmp.rnd = Math.floor(random * (max - min) + min);
          break;
        default:
          throw new RangeError('Expected round value: true | false | "int"');
      };
      if (!(different && rand == deMathTmp.rnd)) { break; }
    };
    return deMathTmp.rnd;
  },

  /**
   * Same as `getRandom()`, but only returns boolean `true` | `false`.
   */
  theTruth: () => {
    return Math.round(Math.random()) == true;
  },
};

// try here on console
//console.log(quotient(5, 8));
//console.log(Math.extends.theTruth());

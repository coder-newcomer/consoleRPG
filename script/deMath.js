var deMath = {
  dec2num: (number, denumber) => {
    if (![2, 8, 16].includes(denumber)) {
      throw new Error('Invaild denumber(' + denumber + ') value: expected value [2, 8, 16]');
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
  };
};
function numberInWords(n){
  var str = n.toString();
  var output = '';
  var digits = digit_value;
  if(str.length === 1){
    return digits[n];
  } else {
    digits[0] = '';
    output += dizaine[str[0]];

    if(str[1]){
      output +=  '-' + digits[str[1]];
    }
    //output +=  ? '-' + digits[str[1]] : '';
  }

  return output;
}

var digit_value = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'];

  var dizaine = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'];
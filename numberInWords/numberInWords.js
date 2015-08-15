function numberInWords(n){
  var numStr = n.toString();
  var lastIndex = numStr.length - 1;
  var output = '';
  var digits = digit_value;
  if(n === 0){
    return 'zero';
  }
  if(n>=10 && n<20){
    return digit_value[n];
  }
  var c;
  if(numStr.length >= 1){
    c = numStr[lastIndex];
    output = digits[c];
  }
  if(numStr.length >= 2){
    c = numStr[lastIndex - 1];
    
    if(output){
      output = dizaine[c] + '-' + output;
    } else {
      output = dizaine[c];
    }
  }
  if(numStr.length === 3){
    c = numStr[lastIndex - 2];
    var part = digits[c] + ' hundred ';

    if(output){
      output = part + output;
    } else {
      output = part;
    }
  }
  
  return output.trim();
}

var digit_value = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
  ];

  var teen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

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
TestCase("Number in word test", {

  "test one digit number": function(){
    assertEquals('zero', numberInWords(0));
    assertEquals('one', numberInWords(1));
    assertEquals('nine', numberInWords(9));
  },

  "test two digits number": function(){
    assertEquals('twenty', numberInWords(20));
    assertEquals('thirty-one', numberInWords(31));
  },

  "test three digits number": function(){
    assertEquals('one hundred fourty', numberInWords(140));
    assertEquals('three hundred thirty-nine', numberInWords(339));
    assertEquals('six hundred', numberInWords(600));
  },

  "test number in teens": function(){
    assertEquals('ten', numberInWords(10));
    assertEquals('eleven', numberInWords(11));
    assertEquals('eighteen', numberInWords(18));
  }


});
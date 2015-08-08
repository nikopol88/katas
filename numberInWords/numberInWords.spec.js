TestCase("Number in word test", {

  "test one digit number": function(){
    assertEquals('zero', numberInWords(0));
    assertEquals('one', numberInWords(1));
    assertEquals('nine', numberInWords(9));
  },

  "test two digits number": function(){
    assertEquals('twenty', numberInWords(20));
    assertEquals('thirty-one', numberInWords(31));
    //assertEquals('nine', numberInWords(9));
  },

});
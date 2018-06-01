function assertEquals(result, expected, name) {
  if (result === expected) {
    console.log("Passed the test!");
  } else {
    console.log(`Failed test: ${name}`);
  }

  console.log("---------------------------");
}

function validatePIN (pin) {

  if ((pin.length === 4 || pin.length === 6) && pin.match(/^\d+$/)) {
    return true;
  }

  return false;

}
  
assertEquals(validatePIN("1"), false, "Wrong output for '1'")
assertEquals(validatePIN("12"), false, "Wrong output for '12'")
assertEquals(validatePIN("123"), false, "Wrong output for '123'")
assertEquals(validatePIN("12345"), false, "Wrong output for '12345'")
assertEquals(validatePIN("1234567"), false, "Wrong output for '1234567'")
assertEquals(validatePIN("-1234"), false, "Wrong output for '-1234'")
assertEquals(validatePIN("1.234"), false, "Wrong output for '1.234'")
assertEquals(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
assertEquals(validatePIN("00000000"), false, "Wrong output for '00000000'")
assertEquals(validatePIN("a234"), false, "Wrong output for 'a234'")
assertEquals(validatePIN(".234"), false, "Wrong output for '.234'")
assertEquals(validatePIN("1234"), true, "Wrong output for '1234'");
assertEquals(validatePIN("0000"), true, "Wrong output for '0000'");
assertEquals(validatePIN("1111"), true, "Wrong output for '1111'");
assertEquals(validatePIN("12g456"), false, "Wrong output for '123456'");
assertEquals(validatePIN("9909S9"), false, "Wrong output for '098765'");
assertEquals(validatePIN("000000"), true, "Wrong output for '000000'");
assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
assertEquals(validatePIN("090909"), true, "Wrong output for '090909'");


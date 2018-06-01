function URLify(str, len) {
  str = str.replace(/[^\w]/g, '').toLowerCase().split('');
  console.log(str);
}

URLify("Mr    John Smith     .", 13);
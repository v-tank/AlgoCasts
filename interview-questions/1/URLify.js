function URLify(str, len) {
  return str.trim().replace(/\s+/g, "%20f");
}

URLify("Mr    John Smith     ", 13);
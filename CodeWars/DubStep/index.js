function songDecoder(song) {
  song = song.split("WUB");
  var result = [];

  for (var i = 0; i < song.length; i++) {
    if (song[i] !== '') {
      result.push(song[i]);
    }
  }

  return result.join(" ");
}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");
songDecoder("WUBAWUBBWUBCWUB");

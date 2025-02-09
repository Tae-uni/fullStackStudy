// Object can contains many different types.
// Such as string, number, array...
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP"],
    "gold": true
  },
  {
    "artist": "Ed Shreen",
    "title": "Shape of You",
    "release_year": 2017,
    "formats": ["MP3", "CD"],
    "award":
      {
        "medal":
          {"gold": true}
      }
  },
];

/* Acessing Nested Objects */
let musicContents = myMusic[0].formats;
let musicAward = myMusic[1].award.medal;
console.log(musicContents);
console.log(musicAward);



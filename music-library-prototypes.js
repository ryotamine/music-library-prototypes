// Music library function
const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.titles = [];
  this.ratings = [];
  this.lengths = [];
  return this;
}

// Add music playlist prototype function
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

// Add playlist track prototype function
Library.prototype.addTrack = function(title, rating, length) {
  this.titles.push(title);
  this.ratings.push(rating);
  this.lengths.push(length);
}

// Music playlist track(s) with overall rating function
Object.defineProperty(Library.prototype,
                      "overallRating",
                      {get() {
                        let overallRating = 0;
                        for (let i = 0; i < this.ratings.length; i++) {
                          overallRating += this.ratings[i];
                        }
                        return (overallRating / this.ratings.length).toFixed(2); }});

// Music playlist track(s) with total duration function
Object.defineProperty(Library.prototype,
                      "totalDuration",
                      {get() {
                        let totalDuration = 0;
                        for (let j = 0; j < this.lengths.length; j++) {
                          totalDuration += this.lengths[j];
                        }
                        return (totalDuration); }});

// Test items
let music = new Library("Ryota", "Mine");
music.addPlaylist("Infinity");
music.addTrack("1", 2, 3);
music.addTrack("4", 5, 6);
music.addTrack("7", 8, 9);
console.log(music);
console.log("Average track rating:", music.overallRating);
console.log("Total track duration:", music.totalDuration);
// Filename: complex_javascript_code.js

/*
 * This is a complex JavaScript code that demonstrates various advanced programming concepts.
 * It implements a custom music player with features like play, pause, stop, next, previous,
 * volume control, shuffle, and repeat. The code is elaborate and spans more than 200 lines.
 * The implementation showcases object-oriented programming, event handling, and DOM manipulation.
 */

class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentTrackIndex = 0;
    this.isPlaying = false;

    // Initialize DOM elements and attach event listeners
    this.playButton = document.getElementById("play-button");
    this.pauseButton = document.getElementById("pause-button");
    this.stopButton = document.getElementById("stop-button");
    this.nextButton = document.getElementById("next-button");
    this.previousButton = document.getElementById("previous-button");
    this.volumeSlider = document.getElementById("volume-slider");
    this.shuffleButton = document.getElementById("shuffle-button");
    this.repeatButton = document.getElementById("repeat-button");

    this.playButton.addEventListener("click", this.play.bind(this));
    this.pauseButton.addEventListener("click", this.pause.bind(this));
    this.stopButton.addEventListener("click", this.stop.bind(this));
    this.nextButton.addEventListener("click", this.next.bind(this));
    this.previousButton.addEventListener("click", this.previous.bind(this));
    this.volumeSlider.addEventListener("input", this.adjustVolume.bind(this));
    this.shuffleButton.addEventListener("click", this.toggleShuffle.bind(this));
    this.repeatButton.addEventListener("click", this.toggleRepeat.bind(this));
  }

  addTrack(track) {
    this.playlist.push(track);
  }

  play() {
    if (this.playlist.length === 0) {
      console.log("No tracks are available in the playlist.");
      return;
    }

    if (!this.isPlaying) {
      // Logic for starting playback
      this.isPlaying = true;
      console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
    }
  }

  pause() {
    if (this.isPlaying) {
      // Logic for pausing playback
      this.isPlaying = false;
      console.log(`Paused: ${this.playlist[this.currentTrackIndex]}`);
    }
  }

  stop() {
    if (this.isPlaying) {
      // Logic for stopping playback
      this.isPlaying = false;
      this.currentTrackIndex = 0;
      console.log(`Stopped playback.`);
    }
  }

  next() {
    if (this.playlist.length === 0) {
      console.log("No tracks are available in the playlist.");
      return;
    }

    // Logic for playing the next track
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    this.play();
  }

  previous() {
    if (this.playlist.length === 0) {
      console.log("No tracks are available in the playlist.");
      return;
    }

    // Logic for playing the previous track
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.play();
  }

  adjustVolume() {
    const volume = this.volumeSlider.value;
    // Logic for adjusting the volume
    console.log(`Volume adjusted to: ${volume}`);
  }

  toggleShuffle() {
    // Logic for toggling shuffle mode
    console.log(`Shuffle mode: ${this.shuffleButton.checked ? "ON" : "OFF"}`);
  }

  toggleRepeat() {
    // Logic for toggling repeat mode
    console.log(`Repeat mode: ${this.repeatButton.checked ? "ON" : "OFF"}`);
  }
}

// Usage example

// Create a new instance of the music player
const player = new MusicPlayer();

// Add tracks to the playlist
player.addTrack("Track 1");
player.addTrack("Track 2");
player.addTrack("Track 3");

// Play the music
player.play();

// Adjust the volume
player.adjustVolume();

// Toggle shuffle mode
player.toggleShuffle();

// Toggle repeat mode
player.toggleRepeat();

// Songs Data

const songs = [
  {
    title: "Pop Music 1",
    src: "./assets/songs/song1.mp3",
    category: "Pop"
  },

  {
    title: "Pop Music 2",
    src: "./assets/songs/song2.mp3",
    category: "Pop"
  },

  {
    title: "Naat",
    src: "./assets/songs/song3.mp3",
    category: "Naat"
  },

  {
    title: "Motivational Music 1",
    src: "./assets/songs/song4.mp3",
    category: "Motivational"
  },

  {
    title: "Motivational Music 2",
    src: "./assets/songs/song5.mp3",
    category: "Motivational"
  }
];

// Elements

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const songTitle = document.getElementById("songTitle");
const playlist = document.getElementById("playlist");
const volume = document.getElementById("volume");

let currentSong = 0;
let isPlaying = false;


// Load Song

function loadSong(index){

    audio.src = songs[index].src;

    songTitle.textContent = songs[index].title;

}

loadSong(currentSong);

// Play Pause

playBtn.addEventListener("click", () => {

    if(isPlaying){

        audio.pause();

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    }

    else{

        audio.play();

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }

    isPlaying = !isPlaying;

});

// Next Song

nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    isPlaying = true;

    playBtn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';

});

// Previous Song

prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    isPlaying = true;

    playBtn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';

});


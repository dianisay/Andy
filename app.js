//let anniversary = "2022-10-13";
//let date = new Date(anniversary);
//let dateVal = date.getTime();
//let today = new Date();
//let now = today.getTime();
//let value = now - dateVal;
//let day = Math.floor(value / (1000 * 60 * 60 * 24));
//let month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
//let year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

//console.log(value);

//document.getElementById("days").textContent = day.toString();
//document.getElementById("months").textContent = month.toString();
//document.getElementById("years").textContent = year.toString();


// Set the start date
const startDate = new Date("November 11, 2023");

// Function to update the countdown
function updateCountdown() {
    const currentDate = new Date();
    
    // Calculate the difference in time (milliseconds)
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, and days
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Update the HTML with the new values
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}

// Run the countdown function every second
setInterval(updateCountdown, 1000);

// Initial call to set the correct date right away
updateCountdown();


let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function() {
    isHidden = !isHidden;
    if(isHidden){
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="icons/close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-full" src="icons/plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPLay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});


let trackList = [
    {
        name: "Kingston",
        artist: "Faye Webster",
        path: "./music/kingston.mp3",
    },
    {
        name: "Congratulations",
        artist: "Mac Miller",
        path: "./music/congratulations-feat-bilal.mp3",
    },
    {
        name: "I Hear a Symphony",
        artist: "Cody Fry",
        path: "./music/i-hear-a-symphony.mp3",
    },
    {
        name: "All My Loving",
        artist: "Arctic Monkeys",
        path: "./music/all-my-loving.mp3",
    },
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex){
    currentTrack.src = trackList[trackIndex].path;
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
    currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack(){
    if(isPlaying == false){
        playTrack();
    }else{
        pauseTrack();
    }
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">';
    soundBarsLottie.play();
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">';
    soundBarsLottie.stop();
}

function nextTrack(){
    if(trackIndex < trackList.length - 1){
        trackIndex += 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = 0;
        loadTrack(trackIndex);
        playTrack();
    } 
}

function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = trackList.length - 1;
        loadTrack(trackIndex);
        playTrack();
    }
}



<script>
  function makeHeartsRain() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement('img');
        heart.src = 'icons/heart.gif';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        const size = 20 + Math.random() * 20;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => {
          heart.remove();
        });
      }, i * 100);
    }
  }

  document.getElementById('heartLeft').addEventListener('click', makeHeartsRain);
  document.getElementById('heartRight').addEventListener('click', makeHeartsRain);
</script>

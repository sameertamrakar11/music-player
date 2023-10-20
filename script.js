console.log("Welcome to our music player")

//Initialize the variavbles
let songIndex = 0;
let audioElement = new Audio();
let masterplay = document.getElementById("masterplay");
let myProgressbar = document.getElementById("myProgressBar")
let mygif = document.getElementById("gif");
let mygmastersongName = document.getElementById("mastersongName");
let songitem = Array.from(document.getElementsByClassName("song-item"))



let songs = [
    { songname: "once in paris", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "My Universe", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Titanium", filePath: "songs/3.mp3", coverPath: "covers/3.webp" },
    { songname: "Futuristic Beat", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "a-call-to-the-soul", filePath: "songs/5.mp3", coverPath: "covers/5.webp" },
    { songname: "good-night", filePath: "songs/6.mp3", coverPath: "covers/6.webp" },
    { songname: "modern-vlog", filePath: "songs/7.mp3", coverPath: "covers/7.webp" },
    { songname: "smoke", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "summer-walk", filePath: "songs/9.mp3", coverPath: "covers/9.webp" },
    { songname: "unlock-me", filePath: "songs/10.mp3", coverPath: "covers/10.webp" },
]


songitem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

// audioElement.play();

//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        mygif.style.opacity = 1
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        mygif.style.opacity = 0
    }
})

//listen to event
audioElement.addEventListener('timeupdate', () => {


    //updateseekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;

})



myProgressbar.addEventListener("change", () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

const makeallplace = () => {

    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause")
        element.classList.add("fa-play")
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {

        makeallplace();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mygmastersongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        mygif.style.opacity = 1
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})


document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex + 1;

    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mygmastersongName.innerText = songs[songIndex].songname;

    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;

    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mygmastersongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
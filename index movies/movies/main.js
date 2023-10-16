// Show Video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".play-movie");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".play-movie");

playButton.oncluck = () => {
    video.classList.add("show-video");
    // Auto Play When Click On Button
    myvideo.play();
};
closebtn.onclick = () => {
    video.classList.remove("show-video");
    // Pause on close video
    myvideo.pause();
};

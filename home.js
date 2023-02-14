let audio = document.getElementById("myAudio");
let arrow = document.querySelector(".arrow");

let images = [
    {
        background: "url(https://i.gifer.com/XXx.gif)",
        audio: "audio.mp3"
    },
    {
        background: "url(https://comicvine.gamespot.com/a/uploads/original/11134/111344585/6519184-8097709959-Zarak.gif)",
        audio: "audio1.mp3"
    },
    {
        background: "url(https://media2.giphy.com/media/M1oPO3TchPJS/giphy.gif)",
        audio: "audio2.mp3"
    },
    {
        background: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b403450-b40b-4070-8544-1683626a9cd7/d4tjrk8-566cd60b-58e5-401a-bb21-3ffd69cc8821.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiNDAzNDUwLWI0MGItNDA3MC04NTQ0LTE2ODM2MjZhOWNkN1wvZDR0anJrOC01NjZjZDYwYi01OGU1LTQwMWEtYmIyMS0zZmZkNjljYzg4MjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kHqnBSK2UnRFtoti6QoYItm-8Kfvr3Rba-zsF4OJIog)",
        audio: "audio3.mp3"
    }
];
let currentImage = 0;

arrow.addEventListener("click", function() {
    currentImage = (currentImage + 1) % images.length;
    document.body.style.backgroundImage = images[currentImage].background;
    audio.src = images[currentImage].audio;
    audio.load();
    audio.play();
});

// enableSoundBtn.addEventListener("click", () => {
//     myAudio.muted = false;
//     myAudio.play();
//     enableSoundBtn.style.display = "none";

// });


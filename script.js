// =======================================
// Creative Media Solutions Voice Portfolio
// Version 2.0
// =======================================

const demos = [

{
title:"Dell – PowerEdge Intel",
category:"TV Commercial",
duration:"1:05",
file:"audio/Dell-Power-Edge-Intel.mp3",
group:"TV Commercials"
},

{
title:"Motorola – Elige 360",
category:"TV Commercial",
duration:"0:42",
file:"audio/Motorola-Elige-360.mp3",
group:"TV Commercials"
},

{
title:"Motorola – Poder Elegir",
category:"TV Commercial",
duration:"0:58",
file:"audio/Motorola-Poder-Elegir.mp3",
group:"TV Commercials"
},

{
title:"Dodge Ram 1500 Texas",
category:"Radio Commercial",
duration:"0:30",
file:"audio/Dodge-Ram-1500-Texas.mp3",
group:"Radio Commercials"
},

{
title:"FOX Network – Simpsons",
category:"TV Promo",
duration:"0:30",
file:"audio/Fox-Network-Simpsoms.mp3",
group:"TV Promos"
},

{
title:"FX – The Shield",
category:"TV Promo",
duration:"0:30",
file:"audio/FX-The-Shield.mp3",
group:"TV Promos"
},

{
title:"KROI Station ID",
category:"Radio Imaging",
duration:"0:20",
file:"audio/KROI-Station-ID.mp3",
group:"Radio Imaging"
},

{
title:"Union Radio ID #1",
category:"Radio Imaging",
duration:"0:15",
file:"audio/Union-Radio-ID1.mp3",
group:"Radio Imaging"
},

{
title:"Union Radio ID #2",
category:"Radio Imaging",
duration:"0:15",
file:"audio/Union-Radio-ID2.mp3",
group:"Radio Imaging"
},

{
title:"Union Radio ID #3",
category:"Radio Imaging",
duration:"0:15",
file:"audio/Union-Radio-ID3.mp3",
group:"Radio Imaging"
},

{
title:"Ralph Lauren Presentation",
category:"Corporate Narration",
duration:"1:30",
file:"audio/Ralph-Lauren-Video-Presentation.mp3",
group:"Corporate Narration"
},

{
title:"Negociadores IVR",
category:"Telephone IVR",
duration:"0:45",
file:"audio/Negociadores-IVR.mp3",
group:"IVR"
}

];

// ----------------------------------------------------
// DOM
// ----------------------------------------------------

const playlist = document.getElementById("playlist");
const title = document.getElementById("demoTitle");
const category = document.getElementById("demoCategory");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");

const equalizer = document.getElementById("equalizer");
const bars = document.querySelectorAll("#equalizer span");

let audioContext;
let analyser;
let source;
let animationId;

// Create audio object
const audio = document.getElementById("audio");

let currentIndex = 0;

// ----------------------------------------------------
// Build Playlist
// ----------------------------------------------------

let currentGroup = "";

demos.forEach((demo,index)=>{

    if(demo.group!==currentGroup){

        currentGroup=demo.group;

        playlist.innerHTML += `
        <h3 class="demo-category">${currentGroup}</h3>
        `;
    }

    playlist.innerHTML += `
   <div class="demo-card ${index===0?'active':''}" data-index="${index}">

<div class="play-indicator">
    <span></span>
    <span></span>
    <span></span>
</div>
        <div class="demo-left">
            <div class="demo-number">${String(index+1).padStart(2,"0")}</div>

            <div class="demo-info">
                <h3>${demo.title}</h3>
                <p>Spanish ${demo.category}</p>
            </div>
        </div>

        <div class="demo-duration">
            ${demo.duration}
        </div>
    </div>
    `;
});

// ----------------------------------------------------
// Load Demo
// ----------------------------------------------------

function loadDemo(index){

    currentIndex=index;

    const demo=demos[index];

    title.textContent=demo.title;
    category.textContent="Spanish "+demo.category;

    audio.src=demo.file;

    document.querySelectorAll(".demo-card").forEach(card=>{
        card.classList.remove("active");
    });

    document.querySelector(`[data-index="${index}"]`).classList.add("active");
}
function formatTime(seconds) {

    if (isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;

}

// ----------------------------------------------------
// Audio Visualizer
// ----------------------------------------------------

function setupVisualizer() {

    if (audioContext) return;

    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    analyser = audioContext.createAnalyser();

   analyser.fftSize = 128;
analyser.smoothingTimeConstant = 0.82;

    source = audioContext.createMediaElementSource(audio);

    source.connect(analyser);

    analyser.connect(audioContext.destination);

}

function startVisualizer() {

    setupVisualizer();

    cancelAnimationFrame(animationId);

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function animate() {

        analyser.getByteFrequencyData(dataArray);

        bars.forEach((bar, index) => {

const value = dataArray[index] || 0;

// Desired height
const targetHeight = Math.max(8, value * 0.32);

// Current height
const currentHeight = parseFloat(bar.style.height) || 8;

// Smooth transition
const smoothHeight =
    currentHeight + (targetHeight - currentHeight) * 0.35;

// Apply
bar.style.height = `${smoothHeight}px`;

        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

}

function stopVisualizer() {

    cancelAnimationFrame(animationId);

    bars.forEach(bar => {

        bar.style.height = "8px";

    });

}

// ----------------------------------------------------
// Play
// ----------------------------------------------------

function playDemo() {

    audio.play();

    startVisualizer();

    playBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="34" height="34">
        <path fill="currentColor"
              d="M6 5h4v14H6zm8 0h4v14h-4z"/>
    </svg>`;
}

// ----------------------------------------------------

function pauseDemo() {

    audio.pause();

    stopVisualizer();

    playBtn.innerHTML = `
<svg viewBox="0 0 24 24" width="34" height="34">
    <path fill="currentColor"
          d="M8 5v14l11-7z"/>
</svg>`;
}

// ----------------------------------------------------

playBtn.addEventListener("click",()=>{

    if(audio.paused){

        playDemo();

    }else{

        pauseDemo();

    }

});

// ----------------------------------------------------
// Playlist clicks
// ----------------------------------------------------

document.addEventListener("click",(e)=>{

    const card=e.target.closest(".demo-card");

    if(!card) return;

    loadDemo(Number(card.dataset.index));

    playDemo();

});

// ----------------------------------------------------
// Previous
// ----------------------------------------------------

prevBtn.onclick=()=>{

    currentIndex--;

    if(currentIndex<0)
        currentIndex=demos.length-1;

    loadDemo(currentIndex);

    playDemo();

};

// ----------------------------------------------------
// Next
// ----------------------------------------------------

nextBtn.onclick=()=>{

    currentIndex++;

    if(currentIndex>=demos.length)
        currentIndex=0;

    loadDemo(currentIndex);

    playDemo();

};

// ----------------------------------------------------
// Auto Next
// ----------------------------------------------------

audio.addEventListener("ended",()=>{
stopEqualizer();

    nextBtn.click();

});
// ------------------------------------
// Display MP3 Duration
// ------------------------------------

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});
// ------------------------------------
// Update Progress Bar and Elapsed Time
// ------------------------------------

audio.addEventListener("timeupdate", () => {

    // Update elapsed time
    currentTime.textContent = formatTime(audio.currentTime);

    // Update progress bar
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;

});
// ------------------------------------
// Seek Audio
// ------------------------------------

progress.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime = (progress.value / 100) * audio.duration;

});
// ------------------------------------
// Volume Control
// ------------------------------------

volume.addEventListener("input", () => {

    audio.volume = volume.value / 100;

});
// ----------------------------------------------------
// Initial Load
// ----------------------------------------------------

loadDemo(0);
const songs = [
{
    title:"English Commercial Demo",
    file:"audio/demo01.mp3"
},
{
    title:"Spanish Commercial Demo",
    file:"audio/demo02.mp3"
},
{
    title:"Automotive Demo",
    file:"audio/demo03.mp3"
},
{
    title:"Retail Demo",
    file:"audio/demo04.mp3"
},
{
    title:"Medical Demo",
    file:"audio/demo05.mp3"
},
{
    title:"Corporate Narration",
    file:"audio/demo06.mp3"
},
{
    title:"Documentary Narration",
    file:"audio/demo07.mp3"
},
{
    title:"IVR / On Hold",
    file:"audio/demo08.mp3"
},
{
    title:"Promo Demo",
    file:"audio/demo09.mp3"
},
{
    title:"Radio Imaging",
    file:"audio/demo10.mp3"
},
{
    title:"TV Promo",
    file:"audio/demo11.mp3"
},
{
    title:"Character Demo",
    file:"audio/demo12.mp3"
}
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("track-title");
const playlist = document.getElementById("playlist");
const progress = document.getElementById("progress");

let current = 0;

function loadSong(index){

    audio.src = songs[index].file;

    title.innerHTML = songs[index].title;

    document.querySelectorAll(".track").forEach(track=>track.classList.remove("active"));

    document.getElementById("track"+index).classList.add("active");

}

songs.forEach((song,index)=>{

    let div=document.createElement("div");

    div.className="track";

    div.id="track"+index;

    div.innerHTML=song.title;

    div.onclick=function(){

        current=index;

        loadSong(current);

        audio.play();

        playBtn.innerHTML="⏸";

    }

    playlist.appendChild(div);

});

loadSong(current);

playBtn.onclick=function(){

    if(audio.paused){

        audio.play();

        playBtn.innerHTML="⏸";

    }else{

        audio.pause();

        playBtn.innerHTML="▶";

    }

}

nextBtn.onclick=function(){

    current++;

    if(current>=songs.length) current=0;

    loadSong(current);

    audio.play();

    playBtn.innerHTML="⏸";

}

prevBtn.onclick=function(){

    current--;

    if(current<0) current=songs.length-1;

    loadSong(current);

    audio.play();

    playBtn.innerHTML="⏸";

}

audio.addEventListener("timeupdate",()=>{

    progress.value=(audio.currentTime/audio.duration)*100 || 0;

});

progress.addEventListener("input",()=>{

    audio.currentTime=(progress.value/100)*audio.duration;

});

audio.addEventListener("ended",()=>{

    nextBtn.click();

});

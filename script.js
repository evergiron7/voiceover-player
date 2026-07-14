/* ==========================================================
   Creative Media Solutions
   Professional Spanish Voice Over Portfolio
   Version 1.0
========================================================== */

/* ---------- Google Font ---------- */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

/* ---------- Variables ---------- */

:root{

    --primary:#2F4E88;
    --dark:#030A37;

    --background:#F5F7FB;
    --card:#FFFFFF;

    --text:#202124;
    --light:#6E7787;

    --border:#DCE3F0;

    --radius:18px;

    --shadow:
        0 12px 30px rgba(3,10,55,.08);

}

/* ---------- Reset ---------- */

*{

    margin:0;
    padding:0;

    box-sizing:border-box;

}

/* ---------- Body ---------- */

body{

    font-family:Montserrat,sans-serif;

    background:var(--background);

    color:var(--text);

    padding:50px 20px;

}

/* ---------- Main Container ---------- */

.container{

    width:100%;

    max-width:1280px;

    margin:auto;

}

/* ---------- Header ---------- */

header{

    text-align:center;

    margin-bottom:45px;

}

.logo{

    width:min(700px,90%);

    display:block;

    margin:auto;

}

h1{

    color:var(--dark);

    font-size:2.2rem;

    font-weight:700;

    margin-top:30px;

}

.subtitle{

    margin-top:12px;

    color:var(--light);

    font-size:1.05rem;

}

/* ---------- Cards ---------- */

.player-card,
.playlist-card,
footer{

    background:var(--card);

    border-radius:var(--radius);

    box-shadow:var(--shadow);

    padding:35px;

    margin-bottom:30px;

}

/* ---------- Player ---------- */

.label{

    display:inline-block;

    font-size:.75rem;

    letter-spacing:2px;

    color:var(--primary);

    font-weight:700;

    margin-bottom:12px;

    text-transform:uppercase;

}

#track-title{

    color:var(--dark);

    font-size:2rem;

    font-weight:700;

}

#track-category{

    margin-top:8px;

    color:var(--light);

}

/* ---------- Progress ---------- */

.progress-area{

    display:grid;

    grid-template-columns:60px 1fr 60px;

    gap:15px;

    align-items:center;

    margin-top:35px;

}

#progress{

    width:100%;

    accent-color:var(--primary);

    cursor:pointer;

}

/* ---------- Controls ---------- */

.controls{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:20px;

    margin:35px 0;

}

.controls button{

    border:none;

    cursor:pointer;

    transition:.25s;

}

.controls button:hover{

    transform:translateY(-2px);

}

.play{

    width:70px;

    height:70px;

    border-radius:50%;

    background:var(--primary);

    color:white;

    font-size:28px;

    box-shadow:0 8px 20px rgba(47,78,136,.30);

}

#prev,
#next{

    width:52px;

    height:52px;

    border-radius:50%;

    background:#EDF2FA;

    color:var(--primary);

    font-size:22px;

}

/* ---------- Volume ---------- */

.volume{

    display:flex;

    align-items:center;

    gap:15px;

}

#volume{

    flex:1;

    accent-color:var(--primary);

}

/* ---------- Playlist ---------- */

.playlist-card h3{

    color:var(--dark);

    margin-bottom:20px;

}

.track{

    padding:18px 20px;

    border:1px solid var(--border);

    border-radius:14px;

    margin-bottom:14px;

    cursor:pointer;

    transition:.25s;

}

.track:hover{

    background:#F3F7FD;

    border-color:var(--primary);

    transform:translateX(4px);

}

.track.active{

    border-left:6px solid var(--primary);

    background:#EEF5FF;

}

/* ---------- Footer ---------- */

footer{

    text-align:center;

}

footer h3{

    color:var(--dark);

    margin-bottom:10px;

}

footer p{

    color:var(--light);

    margin-bottom:25px;

}

.contact-button{

    display:inline-block;

    background:var(--primary);

    color:white;

    text-decoration:none;

    padding:16px 34px;

    border-radius:50px;

    font-weight:600;

    transition:.25s;

}

.contact-button:hover{

    background:var(--dark);

}

/* ---------- Mobile ---------- */

@media(max-width:768px){

    body{

        padding:25px 15px;

    }

    h1{

        font-size:1.6rem;

    }

    #track-title{

        font-size:1.5rem;

    }

    .player-card,
    .playlist-card,
    footer{

        padding:22px;

    }

}
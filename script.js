// let audioElement = new Audio('LifeGoesOn.mp3');
console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('TheTruthUntold.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let currentSong = document.getElementById('currentSong');

let songs= [
    
    {songName: 'The Truth Untold'},
    {songName: 'Blue & Grey'},
    {songName: '(00:00) Zero Oclock'},
    {songName: 'Blood Sweat & Tears'},
    {songName: 'Fake Love'},
    {songName: 'Black Swan'},
    {songName: 'Life Goes On'}
]

// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
       
    } 
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        masterSongName.innerText = songs[songIndex].songName; 
        
        e.target.classList.add('fa-circle-pause');

    

        switch(songIndex)
        {
            case 0:
                audioElement.src = '1.mp3';
                break;
            case 1:
                audioElement.src = '2.mp3';
                break;
            case 2:
                audioElement.src = '3.mp3';
                break;
            case 3:
                audioElement.src = '4.mp3';
                break;
            case 4:
                audioElement.src = '5.mp3';
                break;
            case 5:
                audioElement.src = '6.mp3';
                break;
            case 6:
                audioElement.src = '7.mp3';
                break;

        }
        // audioElement.src = '1.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else
    {
        songIndex += 1;
    }
    switch(songIndex)
    {
        case 0:
            audioElement.src = '1.mp3';
            break;
        case 1:
            audioElement.src = '2.mp3';
            break;
        case 2:
            audioElement.src = '3.mp3';
            break;
        case 3:
            audioElement.src = '4.mp3';
            break;
        case 4:
            audioElement.src = '5.mp3';
            break;
        case 5:
            audioElement.src = '6.mp3';
            break;
        case 6:
            audioElement.src = '7.mp3';
            break;
    }
    audioElement.currentTime=0;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=6;
    }
    else
    {
        songIndex -= 1;
    }
    switch(songIndex)
    {
        case 0:
            audioElement.src = '1.mp3';
            break;
        case 1:
            audioElement.src = '2.mp3';
            break;
        case 2:
            audioElement.src = '3.mp3';
            break;
        case 3:
            audioElement.src = '4.mp3';
            break;
        case 4:
            audioElement.src = '5.mp3';
            break;
        case 5:
            audioElement.src = '6.mp3';
            break;
        case 6:
            audioElement.src = '7.mp3';
            break;
    }
    audioElement.currentTime=0;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
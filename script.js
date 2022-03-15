console.log('Welcome to Spotify');

let SongIndex =  0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName : "Venom" , filePath:"Songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName : "Mocking Bird" , filePath:"Songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName : "GodZilla" , filePath:"Songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName : "Beautiful" , filePath:"Songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName : "A$$ like that" , filePath:"Songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName : "Love the way you lie" , filePath:"Songs/6.mp3" , coverPath:"covers/6.jpg"},
]


songItems.forEach((element , i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play');
        
    }
})



audioElement.addEventListener('timeupdate' , ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 
    myProgressBar.value = progress;
    

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})


//audioElement.play();




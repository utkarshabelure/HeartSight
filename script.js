function start(){
    setInterval(()=>{
        let bpm = 60 + Math.floor(Math.random()*40);
        document.getElementById("bpm").innerText = "BPM: " + bpm;
    },2000);
}
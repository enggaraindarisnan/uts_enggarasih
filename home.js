function Next () {
            document.getElementById("paragraf").innerHTML="Hello, this is LANY!";    
        }
        
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-US", { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

const target = new Date("2026-12-13T07:00:00+05:30").getTime();
function updateCountdown(){
  const now = Date.now();
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000); diff %= 86400000;
  const h = Math.floor(diff / 3600000); diff %= 3600000;
  const m = Math.floor(diff / 60000); diff %= 60000;
  const s = Math.floor(diff / 1000);
  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);
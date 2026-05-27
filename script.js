function updateClock() {
  // get time indicator elements
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  // SVG arc indicators
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  // dot indicators
  let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');

  // get current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

  // convert to 12-hour format (fix midnight = 0 and noon = 12)
  if (h === 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
  }

  // store numeric values before padding (used for arc & dot calculations)
  let hNum = h;
  let mNum = m;
  let sNum = s;

  // pad single digits
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // update labels
  hours.innerHTML = h + ' Hours';
  minutes.innerHTML = m + ' Minutes';
  seconds.innerHTML = s + ' Seconds';
  ampm.innerHTML = ap;

  // update SVG arcs
  hh.style.strokeDashoffset = 440 - (440 * hNum) / 12;
  mm.style.strokeDashoffset = 440 - (440 * mNum) / 60;
  ss.style.strokeDashoffset = 440 - (440 * sNum) / 60;

  // update dot positions
  dotH.style.transform = `rotate(${hNum * 30}deg)`;
  dotM.style.transform = `rotate(${mNum * 6}deg)`;
  dotS.style.transform = `rotate(${sNum * 6}deg)`;
}

// run immediately so clock shows correct time on load (no 1-second blank delay)
updateClock();
setInterval(updateClock, 1000);

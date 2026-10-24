// ---------- Parts (numbered like Chumi's photo: 7 per row) ----------
const PARTS = [
  [1,"🧠","Base Board (Uno)","The robot brain! It runs code and powers the other parts."],
  [2,"🎒","Breadboard Expansion Board","A backpack for the brain, with a mini breadboard on top."],
  [3,"🔋","Power Supply Module","Plugs into the breadboard and gives it power, with an ON button."],
  [4,"📺","LCD1602 Module","A little screen with 2 rows of letters."],
  [5,"🦇","Ultrasonic Sensor","Two eyes that measure how far away things are, like a bat."],
  [6,"🌡️","DHT11 Temp & Humidity","Feels how hot and how wet the air is."],
  [7,"👂","IR Receiver","Hears invisible light from the remote."],
  [8,"🕹️","Joystick Module","A game stick: up, down, left, right, and push."],
  [9,"🎛️","ULN2003 Stepper Driver","A helper board that drives the stepper motor."],
  [10,"⚙️","Stepper Motor","A motor that turns in tiny exact steps."],
  [11,"🦾","Servo Motor SG90","A motor that turns to a spot and stays there."],
  [12,"🌀","3-6V Motor","A motor that spins round and round."],
  [13,"🪭","Fan Blade","Goes on the motor to make wind."],
  [14,"🔀","5V Relay","A switch that the brain can flip on and off: click!"],
  [15,"🎚️","Potentiometer","A turny knob: more or less."],
  [16,"🎵","Passive Buzzer","Plays notes and songs (needs code)."],
  [17,"🚨","Active Buzzer","Beeps by itself when it gets power."],
  [18,"🔘","Button (5 pcs)","Push it to connect. Let go to stop."],
  [19,"🔢","4-Digit 7-Segment","Shows 4 numbers, like a clock."],
  [20,"8️⃣","1-Digit 7-Segment","Shows one number made of 7 light bars."],
  [21,"⌨️","Membrane Switch (keypad)","A flat keypad with number buttons."],
  [22,"🔌","Power Adapter","Plugs into the wall to power the brain."],
  [23,"📡","IR Remote","A remote control that sends invisible light."],
  [24,"🐛","74HC595","A chip that gives the brain extra output pins."],
  [25,"🐞","L293D","A chip that helps drive motors both ways."],
  [26,"🙃","Tilt Switch","Connects or not depending on how you tilt it."],
  [27,"🚪","PN2222 Transistor","A tiny electric switch for bigger things."],
  [28,"🌗","Photoresistor","Feels light: lets more power through when bright."],
  [29,"🟫","Breadboard","Push wires and parts in here. Secret tunnels inside!"],
  [30,"🪢","M-F Dupont Wires","Wires with a pin on one end and a hole on the other."],
  [31,"🌈","65 Jumper Wires","Colorful wires to connect things."],
  [32,"🔗","USB Cable","Connects the brain to a computer for code. (Lost!)"],
  [33,"🔋","Battery Clip (9V)","Snaps on a 9V battery and plugs in the round plug."],
  [34,"🔥","Thermistor","Feels hot and cold."],
  [35,"➡️","1N4007 Diode","A one-way door for electricity."],
  [36,"🦓","Resistors (120 pcs)","Slows electricity down. Stripes tell how much."],
  [37,"🌈","RGB LED","Red, green, and blue lights in one bulb."],
  [38,"💡","LEDs (25 pcs)","Little lights! Long leg is +."],
  [39,"💿","CD with tutorial","Lessons and code for the kit."]
];
const LOST = new Set([32]);

// ---------- No-code projects ----------
const PROJECTS = [
 {id:"p1",code:"P1",e:"🧠",t:"Meet the Robot Brain",c:"#ff5fa2",parts:[1,33,22],steps:[
  ["🔋","Snap a 9V battery on #33. Plug #33 into #1's round power jack (or use #22)."],
  ["🔍","Find the USB port (where #32 would go)."],
  ["📏","Find the rows of pin holes along the edges."],
  ["🟢","Find the ON light. Is it glowing?"],
  ["💛","Find the L light. Count the blinks! 1, 2, 3…"],
  ["😴","Push RESET: the brain takes a nap and wakes up again!"]],
  extra:`🧊 Next: spin the 3D Uno on <a href="https://learn-arduino-red.vercel.app" target="_blank" rel="noopener">Learn Arduino</a>`},
 {id:"p2",code:"P2",e:"🎒",t:"Robot Brain's Backpack",c:"#8e6bff",parts:[1,2,33,38,36,31],steps:[
  ["🎒","Seat #2 on top of #1 (pins into holes)."],
  ["🩹","Mini breadboard: peel ONLY the yellow paper. Keep the white foam! Stick it on #2."],
  ["💡","#38 LED: long leg in one row, short leg in the next row."],
  ["🦓","#36 220Ω (red-red-brown): from the short-leg row to GND on #2's 'RST 3V 5V Gnd Vin' header."],
  ["🌈","#31 wire: one end in 5V. Leave the other end loose."],
  ["🔋","Power on with #33 + 9V."],
  ["👆","Kid touches the loose wire to the long-leg row: LIGHT! ✨"]]},
 {id:"p3",code:"P3",e:"💡",t:"Brainless Light",c:"#3fa9ff",parts:[3,29,33,38,36,31],steps:[
  ["🔋","Push #3 onto the end of #29."],
  ["5️⃣","Set BOTH jumpers on #3 to 5V."],
  ["🔌","Plug #33 (with 9V) into #3."],
  ["💡","#38 LED in the board. #36 resistor from the short-leg row to the blue (−) rail."],
  ["🔴","Wire from the red (+) rail. Touch it to the long leg's row."],
  ["🔘","Press the power button on #3. Glow!"],
  ["🧪","Swap resistors: which is brightest?"]],
  extra:`<b>🧪 Our resistor test</b><table>
  <tr><td>100Ω</td><td>🌞🌞🌞</td><td>brightest</td></tr>
  <tr><td>1K</td><td>🌞🌞</td><td>a bit dimmer</td></tr>
  <tr><td>100K</td><td>🌙</td><td>very faint</td></tr>
  <tr><td>1M</td><td>⚫</td><td>basically off</td></tr></table>
  🚪 Bigger number = skinnier doorway!`},
 {id:"p3b",code:"P3b",e:"🎚️",t:"Dimmer Knob",c:"#3ddc84",parts:[3,29,33,15,38,36,31],steps:[
  ["💡","Start with P3 built. Use a 1K resistor."],
  ["🎚️","Put #15 in the board."],
  ["🔴","One outer leg of #15 → red (+) rail."],
  ["➡️","Middle leg of #15 → the LED long-leg row."],
  ["🚫","Other outer leg: not used."],
  ["🔄","Power on and turn the knob: brighter… dimmer!"]]},
 {id:"p4",code:"P4",e:"📺",t:"Glowing Screen",c:"#ff8c42",parts:[4,15,29,3,33,31],steps:[
  ["📺","Put #4 and #15 on #29, with #3 powering it."],
  ["➖","VSS → − rail"],
  ["➕","VDD → + rail"],
  ["🌟","A → + rail (backlight)"],
  ["⚫","K → − rail"],
  ["🎚️","#15 outer legs → + and −. Middle (wiper) → V0."],
  ["🔄","Power on and turn the knob: boxes appear! ⬛⬛⬛"],
  ["💻","Words need code + #32."]]},
 {id:"p13",code:"P13",e:"🌀",t:"Mini Fan",c:"#00c2c7",parts:[13,12,18,29,3,33,31],steps:[
  ["✋","Keep fingers and hair away from the fan!"],
  ["🪭","Push #13 onto #12."],
  ["🔋","#3 on #29 with #33 + 9V."],
  ["🔘","#18 button on #29 as the switch."],
  ["🌈","+ rail → button → motor wire. Other motor wire → − rail."],
  ["🌬️","Press the button: WIND!"],
  ["🔁","Swap the motor wires: it spins the other way!"],
  ["🚫","Don't use #15 for the motor."]]},
 {id:"p29",code:"P29",e:"🕵️",t:"Light the Secret Path",c:"#e0a800",parts:[29,1,33,38,36,31],steps:[
  ["🕵️","#29 has secret tunnels inside! Rows of holes are connected."],
  ["🧠","Power from #1: wires from 5V and GND (#1 on #33 + 9V)."],
  ["💡","Put a #38 LED and a #36 resistor in."],
  ["🌈","Poke the 5V wire into different rows. Which rows light it?"],
  ["🔄","Flip the LED around. Dark! It's a one-way door 🚪➡️"]]},
 {id:"bell",code:"🔔",e:"🔔",t:"Secret Doorbell",c:"#ff5fa2",parts:[18,38,36,17,1,33,31,26,28,37,15],steps:[
  ["🧠","Power: 5V and GND from #1 (with #33 + 9V)."],
  ["🔘","#18 button from 5V."],
  ["💡","Button → #38 LED + #36 resistor → GND."],
  ["🚨","Button → #17 active buzzer → GND."],
  ["👆","Press: BEEP + light! Ding dong!"]],
  extra:`<b>⬆️ Upgrades</b><br>🙃 #26 tilt alarm · 🌗 #28 night light · 🌈 #37 rainbow mix · 🎚️ #15 knob`}
];

// ---------- Needs #32 (code) ----------
const LIGHT_RACE = `const int GO = 8, RED = 6, BLUE = 7, BUZZ = 9, P1 = 2, P2 = 3;
void setup() {
  pinMode(GO, OUTPUT); pinMode(RED, OUTPUT); pinMode(BLUE, OUTPUT); pinMode(BUZZ, OUTPUT);
  pinMode(P1, INPUT_PULLUP); pinMode(P2, INPUT_PULLUP);
  randomSeed(analogRead(A0));
}
void beep(int ms) { digitalWrite(BUZZ, HIGH); delay(ms); digitalWrite(BUZZ, LOW); }
void flash(int pin) { for (int i = 0; i < 5; i++) { digitalWrite(pin, HIGH); beep(80); digitalWrite(pin, LOW); delay(120); } }
void loop() {
  digitalWrite(RED, LOW); digitalWrite(BLUE, LOW); digitalWrite(GO, LOW);
  delay(1000);
  unsigned long wait = millis() + random(2000, 6000);
  while (millis() < wait) {
    if (digitalRead(P1) == LOW) { flash(BLUE); return; }
    if (digitalRead(P2) == LOW) { flash(RED);  return; }
  }
  digitalWrite(GO, HIGH); beep(150);
  while (true) {
    if (digitalRead(P1) == LOW) { digitalWrite(GO, LOW); flash(RED);  break; }
    if (digitalRead(P2) == LOW) { digitalWrite(GO, LOW); flash(BLUE); break; }
  }
  delay(2000);
}`;
const CODE_IDEAS = [
 {id:"race",e:"🏁",t:"Light Race (reaction duel)",c:"#ff4d4d",parts:[1,18,38,17,29,31,36,32],
  body:`<p>🔘🔘 2× #18 · 💡💡💡 3× #38 · 🚨 #17</p>
  <p>⏳ Wait for GO 💡… first press wins! Too early = you lose 😜</p>
  <p class="tiny">Pins: GO 8 · RED 6 · BLUE 7 · BUZZ 9 · buttons 2 &amp; 3</p>
  <button class="copy" data-copy="race">📋 Copy code</button>
  <pre id="code-race"></pre>`},
 {id:"simon",e:"🎨",t:"Simon Says",c:"#8e6bff",parts:[1,18,38,32],body:`<p>💡➡️🧠➡️🔘 Copy the light pattern!</p>`},
 {id:"dodge",e:"🕹️",t:"Joystick Dodge",c:"#3fa9ff",parts:[1,8,4,32],body:`<p>🕹️ #8 moves you on the 📺 #4 screen. Dodge!</p>`},
 {id:"keypad",e:"🔐",t:"Keypad Code Breaker",c:"#3ddc84",parts:[1,21,32],body:`<p>⌨️ #21 Guess the secret number code!</p>`},
 {id:"close",e:"🦇",t:"Don't Get Close!",c:"#ff8c42",parts:[1,5,17,11,32],body:`<p>🦇 #5 sees you → 🚨 #17 beeps → 🦾 #11 moves!</p>`}
];

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const partOf = n => PARTS.find(p => p[0] === n);
const usedBy = {};
[...PROJECTS, ...CODE_IDEAS].forEach(pr => pr.parts.forEach(n => (usedBy[n] ||= []).push(pr)));
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

// Parts grid
const COLORS = ["#ff5fa2","#8e6bff","#3fa9ff","#3ddc84","#ff8c42","#e0a800","#00c2c7"];
$("#parts-grid").innerHTML = PARTS.map(([n, e, name]) =>
  `<button class="card${LOST.has(n) ? " lost" : ""}" style="--c:${COLORS[(n - 1) % 7]}" data-part="${n}">
    <span class="num">${n}</span><span class="emo">${e}</span><span class="nm">${name}</span></button>`).join("");

const dlg = $("#part-dialog");
function showPart(n) {
  const [, e, name, what] = partOf(n);
  const uses = usedBy[n] || [];
  $("#part-body").innerHTML = `<div class="big">${e}</div><h3>#${n} ${name}</h3><p>${what}</p>
   ${LOST.has(n) ? "<p>😢 Lost! Code projects need it.</p>" : ""}
   <div class="chips">${uses.length ? uses.map(pr => `<a class="chip" href="#${pr.id}" style="background:${pr.c}">${pr.e} ${pr.t}</a>`).join("") : "<span>🔜 Not in our projects yet</span>"}</div>`;
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
}
document.addEventListener("click", ev => {
  const b = ev.target.closest("[data-part]");
  if (b) { showPart(+b.dataset.part); return; }
  const chip = ev.target.closest(".chip");
  if (chip) { dlg.close(); const d = document.querySelector(chip.getAttribute("href")); if (d) d.open = true; }
});
dlg.querySelector(".close").onclick = () => dlg.close();
dlg.addEventListener("click", ev => { if (ev.target === dlg) dlg.close(); });

const partChips = parts => `<div class="parts-used">${parts.map(n => `<button class="pu" data-part="${n}">${partOf(n)[1]} #${n}</button>`).join("")}</div>`;

// Projects
$("#project-list").innerHTML = PROJECTS.map(pr => `
 <details class="proj" id="${pr.id}" style="--c:${pr.c}">
  <summary><span class="pe">${pr.e}</span><span><span class="pt">${pr.code !== pr.e ? pr.code + " · " : ""}${pr.t}</span></span><span class="prog" data-prog="${pr.id}"></span></summary>
  <div class="proj-body">${partChips(pr.parts)}
   <ol class="steps">${pr.steps.map(([e, t], i) => `<li data-step="${pr.id}-${i}"><span class="se">${e}</span><span class="st">${t}</span>
     <label><input type="checkbox" data-key="${pr.id}-${i}">done!</label></li>`).join("")}</ol>
   ${pr.extra ? `<div class="extra">${pr.extra}</div>` : ""}
   <button class="celebrate" data-cel="${pr.id}">🎉 WE DID IT! 🎉</button>
  </div></details>`).join("");

function refresh(id) {
  const boxes = document.querySelectorAll(`input[data-key^="${id}-"]`);
  let done = 0;
  boxes.forEach(b => { if (b.checked) done++; b.closest("li").classList.toggle("done", b.checked); });
  const el = document.querySelector(`[data-prog="${id}"]`);
  if (el) el.textContent = done === boxes.length ? "⭐ done" : `${done}/${boxes.length}`;
}
document.querySelectorAll("input[data-key]").forEach(b => {
  b.checked = load("akx-" + b.dataset.key) === "1";
  b.addEventListener("change", () => { save("akx-" + b.dataset.key, b.checked ? "1" : "0"); refresh(b.dataset.key.replace(/-\d+$/, "")); });
});
PROJECTS.forEach(pr => refresh(pr.id));

// Code ideas
$("#code-list").innerHTML = CODE_IDEAS.map(pr => `
 <details class="proj" id="${pr.id}" style="--c:${pr.c}">
  <summary><span class="pe">${pr.e}</span><span class="pt">${pr.t}</span><span class="prog"><span class="code-tag">needs #32</span></span></summary>
  <div class="proj-body">${partChips(pr.parts)}${pr.body}</div></details>`).join("");
$("#code-race").textContent = LIGHT_RACE;
document.querySelector('[data-copy="race"]').onclick = async ev => {
  try { await navigator.clipboard.writeText(LIGHT_RACE); ev.target.textContent = "✅ Copied!"; }
  catch (e) { ev.target.textContent = "⚠️ Select the code below"; }
};

// Celebrate
const BITS = ["🎉","⭐","💡","🤖","🌈","✨","🎊","⚡"];
function celebrate() {
  const box = $("#confetti");
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("span");
    s.className = "bit";
    s.textContent = BITS[i % BITS.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = 1.8 + Math.random() * 2 + "s";
    s.style.animationDelay = Math.random() * 0.6 + "s";
    box.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 659, 784, 1047].forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = f; o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0.15, ac.currentTime + i * 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + i * 0.15 + 0.3);
      o.start(ac.currentTime + i * 0.15); o.stop(ac.currentTime + i * 0.15 + 0.3);
    });
  } catch (e) {}
}
document.querySelectorAll("[data-cel]").forEach(b => b.onclick = celebrate);

// Open a project from the URL hash
if (location.hash) { const d = document.querySelector(location.hash); if (d && d.tagName === "DETAILS") d.open = true; }
window.addEventListener("hashchange", () => { const d = document.querySelector(location.hash); if (d && d.tagName === "DETAILS") d.open = true; });

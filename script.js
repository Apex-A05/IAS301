/* =========================================================
   BOOT SEQUENCE
   ========================================================= */
const BOOT_LINES = [
  "booting cybersec_reviewer v1.0 ...",
  "mounting /modules ... OK",
  "loading 12 modules ... OK",
  `indexing ${typeof QUIZ_BANK !== "undefined" ? QUIZ_BANK.length : 0} quiz items ... OK`,
  `indexing ${typeof FLASHCARDS !== "undefined" ? FLASHCARDS.length : 0} flashcards ... OK`,
  "starting interface ..."
];

function runBoot(cb){
  const el = document.getElementById("bootText");
  let out = "";
  let li = 0;

  function typeLine(){
    if(li >= BOOT_LINES.length){
      el.innerHTML = out + '<span class="cursor"></span>';
      setTimeout(() => {
        document.getElementById("boot").style.opacity = "0";
        document.getElementById("boot").style.transition = "opacity .4s ease";
        setTimeout(() => {
          document.getElementById("boot").remove();
          document.getElementById("app").classList.remove("hidden");
          cb();
        }, 400);
      }, 350);
      return;
    }
    const line = BOOT_LINES[li];
    let ci = 0;
    const speed = 12;
    function typeChar(){
      if(ci <= line.length){
        el.innerHTML = out + "> " + line.slice(0, ci) + '<span class="cursor"></span>';
        ci++;
        setTimeout(typeChar, speed);
      } else {
        out += "> " + line + "\n";
        li++;
        setTimeout(typeLine, 90);
      }
    }
    typeChar();
  }
  typeLine();
}

/* =========================================================
   CLOCK
   ========================================================= */
function tickClock(){
  const el = document.getElementById("clock");
  if(!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {hour12:false});
}
setInterval(tickClock, 1000);

/* =========================================================
   NAVIGATION
   ========================================================= */
function setView(view){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const target = document.getElementById("view-" + view);
  if(target) target.classList.add("active");
  const tab = document.querySelector(`.tab[data-view="${view}"]`);
  if(tab) tab.classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function initNav(){
  document.querySelectorAll(".tab").forEach(t => {
    t.addEventListener("click", () => setView(t.dataset.view));
  });
  document.querySelectorAll("[data-goto]").forEach(b => {
    b.addEventListener("click", () => setView(b.dataset.goto));
  });
}

/* =========================================================
   HOME
   ========================================================= */
function renderHome(){
  const totalTerms = FLASHCARDS.length;
  const totalQuiz = QUIZ_BANK.length;
  const stats = document.getElementById("homeStats");
  stats.innerHTML = `
    <p>&gt; modules loaded: <strong>${REVIEWER.length}</strong></p>
    <p>&gt; indexed terms: <strong>${totalTerms}</strong></p>
    <p>&gt; quiz bank size: <strong>${totalQuiz}</strong></p>
    <p>&gt; round size: <strong>20–30</strong> randomized items</p>
    <p>&gt; question types: <strong>multiple choice + identification</strong></p>
    <p>&gt; status: <strong>ready</strong></p>
  `;

  const grid = document.getElementById("moduleGrid");
  grid.innerHTML = REVIEWER.map((m, i) => `
    <div class="mod-card" data-mod="${m.id}">
      <div class="mod-card-id">${String(i+1).padStart(2,"0")}</div>
      <div class="mod-card-title">${m.title}</div>
      <div class="mod-card-sub">${m.sub}</div>
    </div>
  `).join("");
  grid.querySelectorAll(".mod-card").forEach(c => {
    c.addEventListener("click", () => {
      setView("reviewer");
      selectModule(c.dataset.mod);
    });
  });
}

/* =========================================================
   REVIEWER
   ========================================================= */
let currentModId = null;

function renderReviewerNav(){
  const nav = document.getElementById("reviewerNav");
  nav.innerHTML = REVIEWER.map(m => `
    <button class="rnav-item" data-mod="${m.id}">
      ${m.title}
      <span class="rn-sub">${m.sub}</span>
    </button>
  `).join("");
  nav.querySelectorAll(".rnav-item").forEach(b => {
    b.addEventListener("click", () => selectModule(b.dataset.mod));
  });
}

function selectModule(id){
  currentModId = id;
  document.querySelectorAll(".rnav-item").forEach(b => {
    b.classList.toggle("active", b.dataset.mod === id);
  });
  const mod = REVIEWER.find(m => m.id === id);
  const pane = document.getElementById("reviewerPane");
  if(!mod){ pane.innerHTML = ""; return; }

  pane.innerHTML = `
    <div class="rp-head">
      <div class="rp-eyebrow">${mod.title}</div>
      <h2 class="rp-title">${mod.sub}</h2>
    </div>
    ${mod.sections.map(sec => `
      <div class="rp-section">
        <h3 class="rp-section-h">${sec.h}</h3>
        ${sec.items.map(([term, def]) => `
          <div class="term-card">
            <div class="term-card-term">${term}</div>
            <div class="term-card-def">${def}</div>
          </div>
        `).join("")}
      </div>
    `).join("")}
  `;
}

/* =========================================================
   FLASHCARDS
   ========================================================= */
let fcDeck = [];
let fcIndex = 0;

function shuffleArray(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initFlashcards(){
  const sel = document.getElementById("fcModuleSelect");
  sel.innerHTML = `<option value="all">All modules</option>` +
    REVIEWER.map(m => `<option value="${m.id}">${m.title} — ${m.sub}</option>`).join("");

  sel.addEventListener("change", () => loadFcDeck(sel.value));
  document.getElementById("fcShuffle").addEventListener("click", () => loadFcDeck(sel.value, true));
  document.getElementById("fcPrev").addEventListener("click", () => moveFc(-1));
  document.getElementById("fcNext").addEventListener("click", () => moveFc(1));
  document.getElementById("fcCard").addEventListener("click", flipFc);

  document.addEventListener("keydown", (e) => {
    if(!document.getElementById("view-flashcards").classList.contains("active")) return;
    if(e.key === "ArrowRight") moveFc(1);
    if(e.key === "ArrowLeft") moveFc(-1);
    if(e.key === " "){ e.preventDefault(); flipFc(); }
  });

  loadFcDeck("all");
}

function loadFcDeck(modId, forceShuffle){
  const pool = modId === "all" ? FLASHCARDS : FLASHCARDS.filter(f => {
    const mod = REVIEWER.find(m => m.title === f.module);
    return mod && mod.id === modId;
  });
  fcDeck = forceShuffle ? shuffleArray(pool) : pool;
  fcIndex = 0;
  renderFcTrack();
  renderFc();
}

function renderFcTrack(){
  const track = document.getElementById("fcTrack");
  const count = Math.min(fcDeck.length, 40);
  track.innerHTML = Array.from({length: count}).map(() => "<span></span>").join("");
}

function renderFc(){
  const card = document.getElementById("fcCard");
  card.classList.remove("flipped");
  const item = fcDeck[fcIndex];
  if(!item) return;
  document.getElementById("fcTagFront").textContent = item.category;
  document.getElementById("fcTagBack").textContent = "definition";
  document.getElementById("fcTerm").textContent = item.term;
  document.getElementById("fcDef").textContent = item.def;
  document.getElementById("fcIndex").textContent = fcIndex + 1;
  document.getElementById("fcTotal").textContent = fcDeck.length;

  const dots = document.querySelectorAll("#fcTrack span");
  dots.forEach((d, i) => {
    d.classList.toggle("current", i === fcIndex % dots.length);
    d.classList.toggle("done", i < fcIndex % dots.length);
  });
}

function flipFc(){
  document.getElementById("fcCard").classList.toggle("flipped");
}

function moveFc(dir){
  if(fcDeck.length === 0) return;
  fcIndex = (fcIndex + dir + fcDeck.length) % fcDeck.length;
  renderFc();
}

/* =========================================================
   QUIZ ENGINE
   ========================================================= */
const quizState = {
  length: 20,
  typeFilter: "all",
  timerSeconds: 30,
  items: [],
  index: 0,
  score: 0,
  results: [], // {q, correct, userAnswer, type}
  timerHandle: null,
  remaining: 30,
  answered: false
};

function initQuizSetup(){
  document.querySelectorAll("#qLenSeg .seg-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#qLenSeg .seg-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      quizState.length = parseInt(b.dataset.len, 10);
    });
  });
  document.querySelectorAll("#qTypeSeg .seg-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#qTypeSeg .seg-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      quizState.typeFilter = b.dataset.type;
    });
  });
  document.querySelectorAll("#qTimerSeg .seg-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#qTimerSeg .seg-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      quizState.timerSeconds = parseInt(b.dataset.timer, 10);
    });
  });

  document.getElementById("qStartBtn").addEventListener("click", startQuizRound);
  document.getElementById("quizQuit").addEventListener("click", endQuizEarly);
  document.getElementById("quizAgain").addEventListener("click", () => {
    showQuizStage("quizSetup");
  });
  document.getElementById("quizHome").addEventListener("click", () => {
    showQuizStage("quizSetup");
    setView("home");
  });
  document.getElementById("quizNext").addEventListener("click", nextQuizItem);
  document.getElementById("quizIdSubmit").addEventListener("click", submitIdAnswer);
  document.getElementById("quizIdField").addEventListener("keydown", (e) => {
    if(e.key === "Enter") submitIdAnswer();
  });
}

function showQuizStage(id){
  ["quizSetup","quizActive","quizResults"].forEach(s => {
    document.getElementById(s).classList.toggle("hidden", s !== id);
  });
}

function pickRandomItems(){
  let pool = QUIZ_BANK.slice();
  if(quizState.typeFilter !== "all"){
    pool = pool.filter(q => q.type === quizState.typeFilter);
  }
  pool = shuffleArray(pool);
  const n = Math.min(quizState.length, pool.length);
  return pool.slice(0, n);
}

function startQuizRound(){
  quizState.items = pickRandomItems();
  quizState.index = 0;
  quizState.score = 0;
  quizState.results = [];
  showQuizStage("quizActive");
  renderQuizItem();
}

function renderQuizItem(){
  quizState.answered = false;
  const item = quizState.items[quizState.index];
  const total = quizState.items.length;

  document.getElementById("quizCounter").textContent = `Item ${quizState.index + 1} / ${total}`;
  document.getElementById("quizScoreLive").textContent = `Score: ${quizState.score}`;
  document.getElementById("quizProgressFill").style.width =
    `${((quizState.index) / total) * 100}%`;

  document.getElementById("quizTypeBadge").textContent =
    item.type === "mc" ? "MULTIPLE CHOICE" : "IDENTIFICATION";
  document.getElementById("quizQuestion").textContent = item.q;

  const feedback = document.getElementById("quizFeedback");
  feedback.classList.add("hidden");
  feedback.innerHTML = "";
  document.getElementById("quizNext").classList.add("hidden");

  const choicesWrap = document.getElementById("quizChoices");
  const idWrap = document.getElementById("quizIdInput");

  if(item.type === "mc"){
    choicesWrap.classList.remove("hidden");
    idWrap.classList.add("hidden");
    const letters = ["A","B","C","D"];
    const shuffled = shuffleArray(item.choices);
    choicesWrap.innerHTML = shuffled.map((c, i) => `
      <button class="choice-btn" data-choice="${encodeURIComponent(c)}">
        <span class="choice-letter">${letters[i]}</span>${c}
      </button>
    `).join("");
    choicesWrap.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", () => submitMcAnswer(btn));
    });
  } else {
    choicesWrap.classList.add("hidden");
    choicesWrap.innerHTML = "";
    idWrap.classList.remove("hidden");
    const field = document.getElementById("quizIdField");
    field.value = "";
    field.disabled = false;
    document.getElementById("quizIdSubmit").disabled = false;
    setTimeout(() => field.focus(), 50);
  }

  startQuizTimer();
}

function startQuizTimer(){
  clearInterval(quizState.timerHandle);
  const timerEl = document.getElementById("quizTimer");
  if(quizState.timerSeconds <= 0){
    timerEl.textContent = "--";
    timerEl.classList.remove("warn");
    return;
  }
  quizState.remaining = quizState.timerSeconds;
  timerEl.textContent = quizState.remaining;
  timerEl.classList.remove("warn");
  quizState.timerHandle = setInterval(() => {
    quizState.remaining--;
    timerEl.textContent = quizState.remaining;
    if(quizState.remaining <= 5) timerEl.classList.add("warn");
    if(quizState.remaining <= 0){
      clearInterval(quizState.timerHandle);
      if(!quizState.answered) timeOutAnswer();
    }
  }, 1000);
}

function timeOutAnswer(){
  const item = quizState.items[quizState.index];
  recordAnswer(false, "(no answer — time ran out)");
  if(item.type === "mc"){
    document.querySelectorAll(".choice-btn").forEach(btn => {
      btn.disabled = true;
      if(decodeURIComponent(btn.dataset.choice) === item.a) btn.classList.add("correct");
    });
  } else {
    document.getElementById("quizIdField").disabled = true;
    document.getElementById("quizIdSubmit").disabled = true;
  }
  showFeedback(false, item.a);
}

function submitMcAnswer(btn){
  if(quizState.answered) return;
  clearInterval(quizState.timerHandle);
  const item = quizState.items[quizState.index];
  const chosen = decodeURIComponent(btn.dataset.choice);
  const isCorrect = chosen === item.a;

  document.querySelectorAll(".choice-btn").forEach(b => {
    b.disabled = true;
    const val = decodeURIComponent(b.dataset.choice);
    if(val === item.a) b.classList.add("correct");
    else if(b === btn && !isCorrect) b.classList.add("wrong");
  });

  recordAnswer(isCorrect, chosen);
  showFeedback(isCorrect, item.a);
}

function normalize(str){
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

function submitIdAnswer(){
  if(quizState.answered) return;
  const item = quizState.items[quizState.index];
  const field = document.getElementById("quizIdField");
  const val = field.value.trim();
  if(val === "") { field.focus(); return; }

  clearInterval(quizState.timerHandle);
  field.disabled = true;
  document.getElementById("quizIdSubmit").disabled = true;

  const isCorrect = normalize(val) === normalize(item.a) ||
    normalize(item.a).includes(normalize(val)) && normalize(val).length > 3;

  recordAnswer(isCorrect, val);
  showFeedback(isCorrect, item.a);
}

function recordAnswer(isCorrect, userAnswer){
  quizState.answered = true;
  if(isCorrect) quizState.score++;
  const item = quizState.items[quizState.index];
  quizState.results.push({
    q: item.q, correct: isCorrect, userAnswer, answer: item.a, type: item.type
  });
  document.getElementById("quizScoreLive").textContent = `Score: ${quizState.score}`;
  document.getElementById("quizNext").classList.remove("hidden");
}

function showFeedback(isCorrect, correctAnswer){
  const fb = document.getElementById("quizFeedback");
  fb.classList.remove("hidden", "correct", "wrong");
  fb.classList.add(isCorrect ? "correct" : "wrong");
  fb.innerHTML = isCorrect
    ? `✓ Correct.`
    : `✕ Not quite. Correct answer: <span class="fb-answer">${correctAnswer}</span>`;
}

function nextQuizItem(){
  quizState.index++;
  if(quizState.index >= quizState.items.length){
    finishQuizRound();
  } else {
    renderQuizItem();
  }
}

function endQuizEarly(){
  clearInterval(quizState.timerHandle);
  if(quizState.results.length === 0){
    showQuizStage("quizSetup");
    return;
  }
  finishQuizRound();
}

function finishQuizRound(){
  clearInterval(quizState.timerHandle);
  showQuizStage("quizResults");

  const total = quizState.results.length;
  const correct = quizState.results.filter(r => r.correct).length;
  const wrong = total - correct;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statWrong").textContent = wrong;
  document.getElementById("statTotal").textContent = total;
  document.getElementById("resultsPercent").textContent = `${pct}%`;

  const ring = document.getElementById("ringFg");
  const circumference = 326.7;
  const offset = circumference - (circumference * pct / 100);
  ring.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => { ring.style.strokeDashoffset = offset; });

  let verdict;
  if(pct >= 90) verdict = "Outstanding. You clearly know this domain cold.";
  else if(pct >= 75) verdict = "Solid run. Review the missed items and you're exam-ready.";
  else if(pct >= 50) verdict = "Decent foundation — go back through the reviewer for the gaps below.";
  else verdict = "Rough round. Hit the flashcards for these topics, then try again.";
  document.getElementById("resultsVerdict").textContent = verdict;

  const review = document.getElementById("resultsReview");
  review.innerHTML = quizState.results.map(r => `
    <div class="review-item">
      <div class="review-q">${r.q}</div>
      <div class="review-a">
        <span class="review-tag ${r.correct ? "ok" : "bad"}">${r.correct ? "correct" : "missed"}</span>
        <span class="review-tag" style="color:var(--ink-faint); background:var(--bg-2);">your answer: ${r.userAnswer}</span>
        ${!r.correct ? `<span class="review-tag" style="color:var(--ink); background:var(--bg-2);">answer: ${r.answer}</span>` : ""}
      </div>
    </div>
  `).join("");
}

/* =========================================================
   INIT
   ========================================================= */
function initApp(){
  initNav();
  renderHome();
  renderReviewerNav();
  selectModule(REVIEWER[0].id);
  initFlashcards();
  initQuizSetup();
  tickClock();
}

runBoot(initApp);

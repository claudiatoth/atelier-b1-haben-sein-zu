// ============================================
// FLASHCARDS - Atelier B1: haben/sein + zu + Infinitiv
// 32 carduri: 8 reguli + 8 propoziții + 8 vocab + 8 verbe
// Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 reguli ==========
    { de: "haben + zu + Infinitiv", ro: "obligație ACTIVĂ (≈ müssen): Ich habe viel zu tun", audio: "audio/letters/01-haben-zu.wav" },
    { de: "sein + zu + Infinitiv", ro: "posibilitate/necesitate PASIVĂ (≈ können/müssen + Passiv)", audio: "audio/letters/02-sein-zu.wav" },
    { de: "haben zu ≈ müssen (activ)", ro: "Ich habe zu arbeiten = Ich muss arbeiten", audio: "audio/letters/03-haben-muessen.wav" },
    { de: "sein zu ≈ Passiv", ro: "Das ist zu machen = Das muss/kann gemacht werden", audio: "audio/letters/04-sein-passiv.wav" },
    { de: "zu la separabile → infix", ro: "ausfüllen → auszufüllen; abholen → abzuholen", audio: "audio/letters/05-zu-separabil.wav" },
    { de: "zu la verbe normale", ro: "stă înainte: zu machen, zu bezahlen, zu verstehen", audio: "audio/letters/06-zu-normal.wav" },
    { de: "sein zu = können (posibilitate)", ro: "Der Fehler ist leicht zu finden (poate fi găsit)", audio: "audio/letters/07-koennen.wav" },
    { de: "sein zu = müssen (necesitate)", ro: "Das Formular ist auszufüllen (trebuie completat)", audio: "audio/letters/08-muessen.wav" },

    // ========== 8 propoziții ==========
    { de: "Ich habe viel zu erledigen.", ro: "Am multe de rezolvat.", audio: "audio/letters/09-erledigen.wav" },
    { de: "Das Formular ist auszufüllen.", ro: "Formularul trebuie completat.", audio: "audio/letters/10-formular.wav" },
    { de: "Du hast die Rechnung zu bezahlen.", ro: "Trebuie să plătești factura.", audio: "audio/letters/11-rechnung.wav" },
    { de: "Die Regeln sind zu beachten.", ro: "Regulile trebuie respectate.", audio: "audio/letters/12-regeln.wav" },
    { de: "Wir haben noch viel zu tun.", ro: "Mai avem multe de făcut.", audio: "audio/letters/13-zu-tun.wav" },
    { de: "Der Fehler ist leicht zu finden.", ro: "Greșeala poate fi găsită ușor.", audio: "audio/letters/14-fehler.wav" },
    { de: "Das Paket ist abzuholen.", ro: "Pachetul trebuie ridicat.", audio: "audio/letters/15-paket.wav" },
    { de: "Diese Aufgabe ist nicht zu lösen.", ro: "Această sarcină nu poate fi rezolvată.", audio: "audio/letters/16-aufgabe.wav" },

    // ========== 8 vocab ==========
    { de: "viel zu erledigen haben", ro: "a avea multe de rezolvat", audio: "audio/letters/17-erledigen-haben.wav" },
    { de: "etwas ist zu tun", ro: "ceva trebuie făcut", audio: "audio/letters/18-zu-tun-v.wav" },
    { de: "ausfüllen → auszufüllen", ro: "a completa (separabil + zu)", audio: "audio/letters/19-ausfuellen.wav" },
    { de: "abholen → abzuholen", ro: "a ridica / a lua (separabil + zu)", audio: "audio/letters/20-abholen.wav" },
    { de: "beachten", ro: "a ține cont de / a respecta", audio: "audio/letters/21-beachten.wav" },
    { de: "erledigen", ro: "a rezolva / a se ocupa de", audio: "audio/letters/22-erledigen-v.wav" },
    { de: "die Rechnung · das Formular", ro: "factura · formularul", audio: "audio/letters/23-rechnung-formular.wav" },
    { de: "die Aufgabe · die Regel", ro: "sarcina · regula", audio: "audio/letters/24-aufgabe-regel.wav" },

    // ========== 8 verbe ==========
    { de: "haben (neregulat)", ro: "a avea — hatte · hat gehabt", audio: "audio/letters/25-haben-v.wav" },
    { de: "sein (neregulat, SEIN)", ro: "a fi — war · ist gewesen", audio: "audio/letters/26-sein-v.wav" },
    { de: "erledigen (regulat)", ro: "a rezolva — erledigte · hat erledigt", audio: "audio/letters/27-erledigen-vb.wav" },
    { de: "ausfüllen (regulat, sep.)", ro: "a completa — füllte aus · hat ausgefüllt", audio: "audio/letters/28-ausfuellen-v.wav" },
    { de: "tun (tare)", ro: "a face — tat · hat getan", audio: "audio/letters/29-tun-v.wav" },
    { de: "bezahlen (regulat)", ro: "a plăti — bezahlte · hat bezahlt", audio: "audio/letters/30-bezahlen-v.wav" },
    { de: "einreichen → einzureichen", ro: "a depune (separabil + zu)", audio: "audio/letters/31-einreichen.wav" },
    { de: "beachten → zu beachten", ro: "de respectat (inseparabil, zu înainte)", audio: "audio/letters/32-beachten-zu.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru atelierul haben/sein + zu.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});

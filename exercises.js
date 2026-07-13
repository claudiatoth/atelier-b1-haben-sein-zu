// ============================================
// EXERCIȚII - Atelier B1: haben/sein + zu + Infinitiv
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: haben + zu (obligație activă) — completează forma lui haben
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich ____ heute viel zu erledigen.', translation: 'Azi am multe de rezolvat.', correct: 'habe', accept: ['habe'] },
    { id: 'b', sentence: 'Du ____ die Rechnung zu bezahlen.', translation: 'Trebuie să plătești factura.', correct: 'hast', accept: ['hast'] },
    { id: 'c', sentence: 'Er ____ das Formular auszufüllen.', translation: 'Trebuie să completeze formularul.', correct: 'hat', accept: ['hat'] },
    { id: 'd', sentence: 'Wir ____ noch viel zu tun.', translation: 'Mai avem multe de făcut.', correct: 'haben', accept: ['haben'] },
    { id: 'e', sentence: 'Ihr ____ die Regeln zu beachten.', translation: 'Trebuie să respectați regulile.', correct: 'habt', accept: ['habt'] },
    { id: 'f', sentence: 'Sie (ei) ____ das Paket abzuholen.', translation: 'Trebuie să ridice pachetul.', correct: 'haben', accept: ['haben'] },
    { id: 'g', sentence: 'Man ____ pünktlich zu sein.', translation: 'Trebuie să fii punctual.', correct: 'hat', accept: ['hat'] },
    { id: 'h', sentence: 'Ich ____ noch einen Brief zu schreiben.', translation: 'Mai am de scris o scrisoare.', correct: 'habe', accept: ['habe'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 haben + zu + Infinitiv (obligație activă ≈ müssen). 🔵</strong><br>
        <em>Reține:</em> habe · hast · hat · haben · habt · haben. Infinitivul cu zu la final.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ex1-${it.id}" placeholder="habe / hast / hat / haben...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: sein + zu (pasiv) — completează ist / sind
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Das Formular ____ auszufüllen.', translation: 'Formularul trebuie completat.', correct: 'ist', accept: ['ist'] },
    { id: 'b', sentence: 'Die Rechnung ____ sofort zu bezahlen.', translation: 'Factura trebuie plătită imediat.', correct: 'ist', accept: ['ist'] },
    { id: 'c', sentence: 'Die Regeln ____ zu beachten. (Plural)', translation: 'Regulile trebuie respectate.', correct: 'sind', accept: ['sind'] },
    { id: 'd', sentence: 'Der Fehler ____ leicht zu finden.', translation: 'Greșeala poate fi găsită ușor.', correct: 'ist', accept: ['ist'] },
    { id: 'e', sentence: 'Die Pakete ____ heute abzuholen. (Plural)', translation: 'Pachetele trebuie ridicate azi.', correct: 'sind', accept: ['sind'] },
    { id: 'f', sentence: 'Diese Aufgabe ____ nicht zu lösen.', translation: 'Această sarcină nu poate fi rezolvată.', correct: 'ist', accept: ['ist'] },
    { id: 'g', sentence: 'Das Auto ____ noch zu reparieren.', translation: 'Mașina mai trebuie reparată.', correct: 'ist', accept: ['ist'] },
    { id: 'h', sentence: 'Die Dokumente ____ zu unterschreiben. (Plural)', translation: 'Documentele trebuie semnate.', correct: 'sind', accept: ['sind'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 sein + zu + Infinitiv (posibilitate/necesitate pasivă). 🟢</strong><br>
        <em>Reține:</em> ≈ können/müssen + Passiv. Singular → <strong>ist</strong>, plural → <strong>sind</strong>.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ex2-${it.id}" placeholder="ist / sind">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: zu la infinitiv (separabile vs normale)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'ausfüllen → Das Formular ist ____. (separabil)', translation: 'de completat', correct: 'auszufüllen', accept: ['auszufüllen', 'auszufuellen'] },
    { id: 'b', sentence: 'bezahlen → Die Rechnung ist ____.', translation: 'de plătit', correct: 'zu bezahlen', accept: ['zu bezahlen'] },
    { id: 'c', sentence: 'abholen → Das Paket ist ____. (separabil)', translation: 'de ridicat', correct: 'abzuholen', accept: ['abzuholen'] },
    { id: 'd', sentence: 'verstehen → Der Text ist leicht ____.', translation: 'de înțeles', correct: 'zu verstehen', accept: ['zu verstehen'] },
    { id: 'e', sentence: 'anrufen → Ich habe den Arzt ____. (separabil)', translation: 'de sunat', correct: 'anzurufen', accept: ['anzurufen'] },
    { id: 'f', sentence: 'machen → Es gibt viel ____.', translation: 'de făcut', correct: 'zu machen', accept: ['zu machen'] },
    { id: 'g', sentence: 'mitbringen → Was ist ____? (separabil)', translation: 'de adus (cu mine)', correct: 'mitzubringen', accept: ['mitzubringen'] },
    { id: 'h', sentence: 'aufräumen → Das Zimmer ist ____. (separabil)', translation: 'de făcut ordine', correct: 'aufzuräumen', accept: ['aufzuräumen', 'aufzuraeumen'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 zu la infinitiv — separabile vs. normale. 🔧</strong><br>
        <em>Reține:</em> verb normal → <strong>zu</strong> înainte (zu machen) · separabil → zu ÎNTRE prefix și verb (aus<strong>zu</strong>füllen).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ex3-${it.id}" placeholder="infinitiv cu zu...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Diktat audio
// ============================================
const ex4Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Ich habe heute viel zu erledigen.', accept: ['Ich habe heute viel zu erledigen.'], ro: 'Azi am multe de rezolvat.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Das Formular ist auszufüllen.', accept: ['Das Formular ist auszufüllen.'], ro: 'Formularul trebuie completat.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Du hast die Rechnung zu bezahlen.', accept: ['Du hast die Rechnung zu bezahlen.'], ro: 'Trebuie să plătești factura.' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Die Regeln sind zu beachten.', accept: ['Die Regeln sind zu beachten.'], ro: 'Regulile trebuie respectate.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Das Paket ist noch abzuholen.', accept: ['Das Paket ist noch abzuholen.'], ro: 'Pachetul mai trebuie ridicat.' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Wir haben noch viel zu tun.', accept: ['Wir haben noch viel zu tun.'], ro: 'Mai avem multe de făcut.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Der Fehler ist leicht zu finden.', accept: ['Der Fehler ist leicht zu finden.'], ro: 'Greșeala poate fi găsită ușor.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Diese Aufgabe ist nicht zu lösen.', accept: ['Diese Aufgabe ist nicht zu lösen.'], ro: 'Această sarcină nu poate fi rezolvată.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția.</strong><br>
        <em>Sfat:</em> atenție la haben vs. sein (ist/sind) și la zu la separabile (auszufüllen, abzuholen).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ex4-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Azi am multe de rezolvat. (haben zu)', correct: 'Ich habe heute viel zu erledigen.', accept: ['ich habe heute viel zu erledigen.', 'ich habe heute viel zu erledigen'] },
    { id: 'b', ro: 'Formularul trebuie completat. (sein zu)', correct: 'Das Formular ist auszufüllen.', accept: ['das formular ist auszufüllen.', 'das formular ist auszufuellen'] },
    { id: 'c', ro: 'Trebuie să plătești factura. (haben zu)', correct: 'Du hast die Rechnung zu bezahlen.', accept: ['du hast die rechnung zu bezahlen.', 'du hast die rechnung zu bezahlen'] },
    { id: 'd', ro: 'Regulile trebuie respectate. (sein zu)', correct: 'Die Regeln sind zu beachten.', accept: ['die regeln sind zu beachten.', 'die regeln sind zu beachten'] },
    { id: 'e', ro: 'Mai avem multe de făcut.', correct: 'Wir haben noch viel zu tun.', accept: ['wir haben noch viel zu tun.', 'wir haben noch viel zu tun'] },
    { id: 'f', ro: 'Greșeala poate fi găsită ușor.', correct: 'Der Fehler ist leicht zu finden.', accept: ['der fehler ist leicht zu finden.', 'der fehler ist leicht zu finden'] },
    { id: 'g', ro: 'Pachetul trebuie ridicat. (sein zu, separabil)', correct: 'Das Paket ist abzuholen.', accept: ['das paket ist abzuholen.', 'das paket ist abzuholen'] },
    { id: 'h', ro: 'Trebuie să completez formularul. (haben zu)', correct: 'Ich habe das Formular auszufüllen.', accept: ['ich habe das formular auszufüllen.', 'ich habe das formular auszufuellen'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Traducere RO → DE.</strong><br>
        <em>Mix:</em> haben + zu (activ) · sein + zu (pasiv) · zu la separabile.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>🇷🇴 ${it.ro}</label>
                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ex5-${it.id}" placeholder="Traducere în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});

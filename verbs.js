// ============================================
// VERB-KONJUGATION - Atelier B1: haben/sein + zu + Infinitiv
// 6 verbe PONS-verified: haben, sein, erledigen, ausfüllen, tun, bezahlen
// haben & sein = verbele care formează structura; restul apar des în ea.
// Badge: tare/neregulat (rosu) · regulat (verde). Präteritum = IMPERFECT.
// ============================================

const verbsData = [
    {
        inf: 'haben', ro: 'a avea (haben + zu = obligație activă)', typ: 'tare / neregulat', aux: 'haben', part: 'gehabt',
        praes: [
            ['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],
            ['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']
        ],
        praet: [
            ['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],
            ['wir','hatten','aveam (noi)'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']
        ],
        perf: [
            ['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],
            ['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']
        ],
        note: 'Verbul de bază pentru haben + zu + Infinitiv (obligație ACTIVĂ ≈ müssen): Ich habe viel zu tun.'
    },
    {
        inf: 'sein', ro: 'a fi (sein + zu = necesitate/posibilitate pasivă)', typ: 'tare / neregulat', aux: 'sein', part: 'gewesen',
        praes: [
            ['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],
            ['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']
        ],
        praet: [
            ['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],
            ['wir','waren','eram (noi)'],['ihr','wart','erați'],['sie/Sie','waren','erau']
        ],
        perf: [
            ['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],
            ['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']
        ],
        note: 'Verbul de bază pentru sein + zu + Infinitiv (PASIV ≈ können/müssen + werden): Das ist zu machen. Perfekt cu SEIN.'
    },
    {
        inf: 'erledigen', ro: 'a rezolva / a se ocupa de', typ: 'regulat', aux: 'haben', part: 'erledigt',
        praes: [
            ['ich','erledige','rezolv'],['du','erledigst','rezolvi'],['er/sie/es','erledigt','rezolvă'],
            ['wir','erledigen','rezolvăm'],['ihr','erledigt','rezolvați'],['sie/Sie','erledigen','rezolvă']
        ],
        praet: [
            ['ich','erledigte','rezolvam'],['du','erledigtest','rezolvai'],['er/sie/es','erledigte','rezolva'],
            ['wir','erledigten','rezolvam (noi)'],['ihr','erledigtet','rezolvați'],['sie/Sie','erledigten','rezolvau']
        ],
        perf: [
            ['ich','habe erledigt','am rezolvat'],['du','hast erledigt','ai rezolvat'],['er/sie/es','hat erledigt','a rezolvat'],
            ['wir','haben erledigt','am rezolvat'],['ihr','habt erledigt','ați rezolvat'],['sie/Sie','haben erledigt','au rezolvat']
        ],
        note: 'Verb REGULAT (er- → fără ge-: erledigt). Des în structură: Ich habe viel zu erledigen.'
    },
    {
        inf: 'ausfüllen', ro: 'a completa (un formular)', typ: 'regulat (separabil)', aux: 'haben', part: 'ausgefüllt',
        praes: [
            ['ich','fülle aus','completez'],['du','füllst aus','completezi'],['er/sie/es','füllt aus','completează'],
            ['wir','füllen aus','completăm'],['ihr','füllt aus','completați'],['sie/Sie','füllen aus','completează']
        ],
        praet: [
            ['ich','füllte aus','completam'],['du','fülltest aus','completai'],['er/sie/es','füllte aus','completa'],
            ['wir','füllten aus','completam (noi)'],['ihr','fülltet aus','completați'],['sie/Sie','füllten aus','completau']
        ],
        perf: [
            ['ich','habe ausgefüllt','am completat'],['du','hast ausgefüllt','ai completat'],['er/sie/es','hat ausgefüllt','a completat'],
            ['wir','haben ausgefüllt','am completat'],['ihr','habt ausgefüllt','ați completat'],['sie/Sie','haben ausgefüllt','au completat']
        ],
        note: 'Verb SEPARABIL (füllen + aus). Cu zu → aus<strong>zu</strong>füllen: Das Formular ist auszufüllen.'
    },
    {
        inf: 'tun', ro: 'a face', typ: 'tare / neregulat', aux: 'haben', part: 'getan',
        praes: [
            ['ich','tue','fac'],['du','tust','faci'],['er/sie/es','tut','face'],
            ['wir','tun','facem'],['ihr','tut','faceți'],['sie/Sie','tun','fac']
        ],
        praet: [
            ['ich','tat','făceam'],['du','tatest','făceai'],['er/sie/es','tat','făcea'],
            ['wir','taten','făceam (noi)'],['ihr','tatet','făceați'],['sie/Sie','taten','făceau']
        ],
        perf: [
            ['ich','habe getan','am făcut'],['du','hast getan','ai făcut'],['er/sie/es','hat getan','a făcut'],
            ['wir','haben getan','am făcut'],['ihr','habt getan','ați făcut'],['sie/Sie','haben getan','au făcut']
        ],
        note: 'Verb TARE (tat, getan). Idiom: Ich habe viel zu tun (am multe de făcut).'
    },
    {
        inf: 'bezahlen', ro: 'a plăti', typ: 'regulat', aux: 'haben', part: 'bezahlt',
        praes: [
            ['ich','bezahle','plătesc'],['du','bezahlst','plătești'],['er/sie/es','bezahlt','plătește'],
            ['wir','bezahlen','plătim'],['ihr','bezahlt','plătiți'],['sie/Sie','bezahlen','plătesc']
        ],
        praet: [
            ['ich','bezahlte','plăteam'],['du','bezahltest','plăteai'],['er/sie/es','bezahlte','plătea'],
            ['wir','bezahlten','plăteam (noi)'],['ihr','bezahltet','plăteați'],['sie/Sie','bezahlten','plăteau']
        ],
        perf: [
            ['ich','habe bezahlt','am plătit'],['du','hast bezahlt','ai plătit'],['er/sie/es','hat bezahlt','a plătit'],
            ['wir','haben bezahlt','am plătit'],['ihr','habt bezahlt','ați plătit'],['sie/Sie','haben bezahlt','au plătit']
        ],
        note: 'Verb REGULAT (be- → fără ge-: bezahlt). Die Rechnung ist zu bezahlen / Du hast die Rechnung zu bezahlen.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (ich habe/bin, du hast/bist...) + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale atelierului</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. haben și sein sunt verbele care FORMEAZĂ structura.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Vedetele sunt haben și sein — cele două verbe care formează structura: Ich <strong>habe</strong> zu… (activ) și Das <strong>ist</strong> zu… (pasiv). Restul sunt verbe des folosite în structură: erledigen, ausfüllen-separabil (→ auszufüllen), tun-TARE (viel zu tun) și bezahlen. La haben+zu TU acționezi; la sein+zu, lucrului i se face ceva. <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('Modal') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();

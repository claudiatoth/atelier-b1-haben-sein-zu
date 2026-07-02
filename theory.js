// ============================================
// TEORIE - Atelier B1: haben/sein + zu + Infinitiv
// Claudia Toth · haben+zu (obligație activă) · sein+zu (posibilitate/necesitate pasivă) · zu la separabile
// Standard vizual: logo + marca-fluture (branding-only — gramatică, fără substantive concrete)
// Diferențiat de Atelier A2 „Infinitiv mit zu" (verbe+zu · um/ohne/anstatt+zu)
// ============================================

const theoryHTML = `
    <!-- 0: haben + zu -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🔵 1. haben + zu + Infinitiv (obligație activă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-haben-zu.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Azi învățăm două structuri elegante care înlocuiesc <strong>müssen</strong>: <strong>haben + zu</strong> și <strong>sein + zu</strong>. Prima e <em>activă</em> — TU trebuie să faci ceva: <em>Ich habe viel zu tun</em> (am multe de făcut). A doua e <em>pasivă</em> — ceva trebuie/poate fi făcut: <em>Das Formular ist auszufüllen</em>. Sună foarte germano-german, mai ales pe formulare și în reguli. Hai să le prindem! <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>
                </div>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 haben (conjugat) + … + zu + Infinitiv = trebuie / am de… (ACTIV)</h4>
                <p>Subiectul trebuie ACTIV să facă ceva. Sensul e ca <strong>müssen</strong> (sau sollen):</p>
                <div class="example-box">
                    <p class="de">Ich <strong>habe</strong> heute viel <strong>zu erledigen</strong>.</p>
                    <p class="ro">Azi am multe de rezolvat. (= Ich muss heute viel erledigen)</p>
                </div>
                <div class="example-box">
                    <p class="de">Du <strong>hast</strong> die Rechnung <strong>zu bezahlen</strong>.</p>
                    <p class="ro">Trebuie să plătești factura.</p>
                </div>
                <p style="margin-top:6px"><strong>⚠️</strong> haben se conjugă (habe/hast/hat/haben/habt/haben), infinitivul cu <strong>zu</strong> pleacă la FINAL.</p>
            </div>

            <div class="theory-box">
                <h4>Ce înveți în acest atelier</h4>
                <ul>
                    <li>🔵 <strong>haben + zu</strong> — obligație ACTIVĂ (≈ müssen)</li>
                    <li>🟢 <strong>sein + zu</strong> — posibilitate/necesitate PASIVĂ (≈ können/müssen + Passiv)</li>
                    <li>🔧 <strong>zu la verbele separabile</strong> (ausfüllen → auszufüllen)</li>
                    <li>🔄 <strong>Transformări</strong> müssen ↔ haben/sein + zu + capcana RO</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: sein + zu -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟢 2. sein + zu + Infinitiv (posibilitate/necesitate pasivă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-sein-zu.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 sein (conjugat) + … + zu + Infinitiv = trebuie/poate fi… (PASIV)</h4>
                <p>Aici subiectul NU face acțiunea — i se face ceva. Sensul e pasiv, ca <strong>können</strong> sau <strong>müssen + werden</strong>:</p>
                <div class="example-box">
                    <p class="de">Das Formular <strong>ist auszufüllen</strong>.</p>
                    <p class="ro">Formularul trebuie completat. (= Das Formular muss ausgefüllt werden)</p>
                </div>
                <div class="example-box">
                    <p class="de">Die Regeln <strong>sind zu beachten</strong>. <em>(plural → sind)</em></p>
                    <p class="ro">Regulile trebuie respectate.</p>
                </div>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>Două sensuri: NECESITATE sau POSIBILITATE</h4>
                <ul>
                    <li><strong>necesitate</strong> (≈ müssen): Das Formular <strong>ist auszufüllen</strong> = trebuie completat.</li>
                    <li><strong>posibilitate</strong> (≈ können): Der Fehler <strong>ist</strong> leicht <strong>zu finden</strong> = poate fi găsit ușor.</li>
                </ul>
                <p style="margin-top:4px">Contextul (mai ales cu <strong>leicht/schwer/kaum/nicht</strong>) îți spune care: cu „leicht/nicht" înclină spre <strong>posibilitate</strong>.</p>
            </div>

            <div style="background: #eff6ff; border-left: 4px solid #1e3a8a; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #1e3a8a;">Florian:</strong> Auf dem Rezept steht: „Die Tabletten sind zweimal täglich einzunehmen." Das heißt: müssen eingenommen werden. Kurz, klar, offiziell!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Pe rețetă scrie „pastilele trebuie luate de două ori pe zi". Adică: trebuie să fie luate. Scurt, clar, oficial! (sein + zu = pasiv)</p>
            </div>
        </div>
    </div>

    <!-- 2: zu la separabile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔧 3. zu la verbele separabile (auszufüllen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-zu-separabile.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Unde stă „zu"?</h4>
                <ul>
                    <li>Verbe <strong>normale</strong>: zu stă ÎNAINTE — <strong>zu machen</strong>, <strong>zu bezahlen</strong>, <strong>zu lesen</strong>.</li>
                    <li>Verbe <strong>separabile</strong>: zu intră ÎNTRE prefix și verb — aus<strong>zu</strong>füllen, ab<strong>zu</strong>holen, an<strong>zu</strong>rufen, mit<strong>zu</strong>bringen.</li>
                    <li>Verbe <strong>inseparabile</strong> (be-, ver-, er-…): zu stă înainte — <strong>zu</strong> verstehen, <strong>zu</strong> bezahlen.</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>💬 Exemple</h4>
                <div class="example-box">
                    <p class="de">Das Formular ist aus<strong>zu</strong>füllen. (ausfüllen)</p>
                    <p class="ro">Formularul trebuie completat.</p>
                </div>
                <div class="example-box">
                    <p class="de">Das Paket ist ab<strong>zu</strong>holen. (abholen)</p>
                    <p class="ro">Pachetul trebuie ridicat.</p>
                </div>
                <div class="example-box">
                    <p class="de">Ich habe noch den Arzt an<strong>zu</strong>rufen. (anrufen)</p>
                    <p class="ro">Mai am de sunat la doctor.</p>
                </div>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #ea580c; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #9a3412;">Mihai:</strong> In meiner Küche habe ich viel vorzubereiten und einzukaufen — bei trennbaren Verben rutscht das „zu" mitten hinein: vor-zu-bereiten, ein-zu-kaufen!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">În bucătăria mea am multe de pregătit și de cumpărat — la verbele separabile, „zu" alunecă la mijloc: vor-zu-bereiten, ein-zu-kaufen!</p>
            </div>
        </div>
    </div>

    <!-- 3: Transformări müssen ↔ haben/sein + zu -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔄 4. Transformări: müssen ↔ haben/sein + zu</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-transformari.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Cine face acțiunea decide structura</h4>
                <table class="grammar-table">
                    <tr><th>Cu müssen</th><th>Echivalent</th></tr>
                    <tr><td>Ich <strong>muss</strong> die Arbeit machen. (activ)</td><td>Ich <strong>habe</strong> die Arbeit <strong>zu machen</strong>.</td></tr>
                    <tr><td>Die Arbeit <strong>muss gemacht werden</strong>. (pasiv)</td><td>Die Arbeit <strong>ist zu machen</strong>.</td></tr>
                </table>
                <p style="margin-top:6px"><strong>Regula:</strong> subiect care ACȚIONEAZĂ → <strong>haben + zu</strong>. Ceva care e SUFERĂ acțiunea (Passiv) → <strong>sein + zu</strong>.</p>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 Capcana românului</h4>
                <p>Româna spune și „<strong>am de făcut</strong>" (≈ haben zu: Ich habe zu tun), și „<strong>trebuie/poate fi făcut</strong>" (≈ sein zu: Das ist zu machen). Nu le amesteca: dacă TU faci → haben; dacă LUCRULUI i se face → sein.</p>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Annette:</strong> Merkhilfe: <strong>haben zu</strong> = ich habe eine Aufgabe (activ, eu). <strong>sein zu</strong> = die Aufgabe ist da, sie muss/kann erledigt werden (pasiv, lucrul). Beides ersetzt „müssen" — nur die Perspektive ändert sich!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Truc: haben zu = eu am o sarcină (activ). sein zu = sarcina există, trebuie/poate fi făcută (pasiv). Ambele înlocuiesc „müssen" — se schimbă doar perspectiva!</p>
            </div>
        </div>
    </div>

    <!-- 4: Wortschatz + capcana RO -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🏅 5. Wortschatz & unde le folosești</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-wortschatz.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Unde le întâlnești</h4>
                <p>Structurile astea sunt tipice pentru <strong>formulare, instrucțiuni, reguli, rețete, e-mailuri de serviciu</strong>. „Das Formular ist bis Freitag <strong>einzureichen</strong>", „Die Unterlagen sind <strong>mitzubringen</strong>", „Ich habe noch drei Mails <strong>zu schreiben</strong>".</p>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>📒 Verbe & expresii frecvente</h4>
                <table class="grammar-table">
                    <tr><th>Deutsch</th><th>Română</th></tr>
                    <tr><td class="verb">viel zu erledigen haben</td><td>a avea multe de rezolvat</td></tr>
                    <tr><td class="verb">etwas ist auszufüllen</td><td>ceva trebuie completat</td></tr>
                    <tr><td class="verb">die Regeln sind zu beachten</td><td>regulile trebuie respectate</td></tr>
                    <tr><td class="verb">die Rechnung ist zu bezahlen</td><td>factura trebuie plătită</td></tr>
                    <tr><td class="verb">das Paket ist abzuholen</td><td>pachetul trebuie ridicat</td></tr>
                </table>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Annette:</strong> Tipp: pentru un stil formal, curat, folosiți haben/sein + zu în loc de müssen. Sună profesionist — exact ca în limbajul administrativ german!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Sfat: pentru un stil formal, folosiți haben/sein + zu în loc de müssen. Sună profesionist.</p>
            </div>

            <div class="theory-box" style="text-align:center; background:#ecfdf5; border-color:#10b981;">
                <p style="margin:0; font-weight:bold; color:#065f46;">🔧 haben/sein + zu bifat — obligație activă, necesitate/posibilitate pasivă și zu la separabile. Acum citești orice formular german!</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

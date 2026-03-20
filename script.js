const facts = [
  "MaddyGruender once accidentally invented a new color.",
  "Maddy is the reason 'Stellar' is a word.",
  "Fact: Maddy can type 400 words per minute if they are all 'Maddy'.",
  "Most searched: 'MaddyGruender daily routine'.",
  "Maddy never loses her keys; the keys just hide in fear.",
  "The moon only shines because Maddy allowed it.",
  "Maddy's laugh is legally classified as a musical instrument.",
  "Common result: 'MaddyGruender for President 2028'."
];

// Reusable drag logic
function makeDraggable(element) {
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
    element.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    element.style.left = (e.clientX - offsetX) + 'px';
    element.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      element.style.zIndex = element.classList.contains('theme-tag') ? 5 : 2;
    }
  });
}

function spawnFact() {
  const text = facts[Math.floor(Math.random() * facts.length)];
  const bubble = document.createElement('div');
  bubble.className = 'fact-bubble';
  bubble.innerText = text;

  // Random initial position
  bubble.style.left = (Math.random() * (window.innerWidth - 200)) + 'px';
  bubble.style.top = (Math.random() * (window.innerHeight - 150)) + 'px';

  makeDraggable(bubble);
  document.body.appendChild(bubble);
}

function addTheme() {
  const input = document.getElementById('themeInput');
  const themeText = input.value.trim();
  if (themeText === "") return;

  const tag = document.createElement('div');
  tag.className = 'theme-tag';
  tag.innerText = themeText;
  
  tag.style.left = '50px';
  tag.style.top = '50px';

  makeDraggable(tag);
  document.body.appendChild(tag);
  input.value = "";
}

function takeSnapshot() {
  const ui = document.querySelector('.ui-container');
  ui.style.display = 'none'; // Hide UI for the clean photo

  html2canvas(document.body).then(canvas => {
    const link = document.createElement('a');
    link.download = 'My-Maddy-Curation.png';
    link.href = canvas.toDataURL();
    link.click();
    ui.style.display = 'flex'; // Bring UI back
  });
}

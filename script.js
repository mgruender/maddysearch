const facts = [
  "Maddy loves to make 'micro' memes that reflect specific instances between her friends, such as a Jaws image with a paper deadline.",
  "When she was younger, Maddy would make minecraft skins because she didnt like the quality of the ones she found and wanted to make some that fit her needs",
  "Maddy has worked in outdoor education for 10 years in the summers. It’s like content curation of the outdoors.",
  "Research has taught Maddy many life lessons. Such as: all results tell us something.",
  "In Maddy's opinion: theres no better thing than asking a question.",
  "Maddy has designed 3 logos for the projects in her lab: a raccoon, a raven, and a bumblebee.",
  "Maddy once made a whole PowerPoint to pitch a raccoon for a lab project.",
  "Hot take: Maddy thinks the best social creatives have experience in fandom spaces (she has experience in fandom spaces).",
  "Maddy's favorite social detox is only looking at Facebook Marketplace to find new things to add their space or their pinterest boards",
  "One phenomenon Maddy is researching is a cross polination between the fandom of the NFL Denver Broncos and the horse game Umamasume",
  "Maddy’s go-to focus technique is playing a song on repeat: Fame is a Gun, C'est Toi, or Mimosa 2000.",
  "Maddy thinks Pinterest boards and academic literature reviews serve a similar purpose.",
  "Maddy once had a 10-minute staring contest with a seagull. The seagull won, but it was close.",
  "Maddy can flip a sea kayak over and flip back up by herself. She has a video to prove it.",
  "Maddy once saw 17 banana slugs in one hike through Santa Cruz's redwood forest.",
  "Maddy is a fan of energy drinks with two red cows as a logo and vanilla lattes.",
  "Maddy really likes using Figma for figure graphics for her research papers.",
  "Maddy believes that 'Social Strategy' is just 'Outdoor Ed' for the internet.",
  "Maddy thinks the most important part of a social media action is how it shapes community...does it create a comment culture?",
  "Maddy can manage chaos because Maddy has managed 20 middle-school boys on a field trip on a really windy day.",
  "Maddy has loved being a teaching assistant, and breaking down knowledge to be easier for students to understand.",
  "Maddy's favorite class of undergrad was Visual and Spatial Cognition. Learned how video games can help with cognitive navigation",
  "One of Maddy's favorite graduate classes was Trustworthy Online experiments taught by a Google UX researcher",
  "Maddy once spent 30 minutes researching the 'History of San Francisco' just to win a very minor argument.",
  "Maddy treats feedback as part of the design, not just something that happens after.",
  "Maddy has a habit of opening 20+ tabs while researching and insists they are all important.",
  "Maddy treats playlists like design artifacts: curated, iterative, and very intentional.",
  "Maddy sees iteration as the main creative skill, not just improvement but discovery.",
  "Maddy views every social platform as a different 'ecosystem' some are redwoods, some are oceans.",
  "Maddy thinks a good question is often more valuable than a polished answer.",
  "Maddy enjoys making things that make other people want to contribute.",
  
  
  
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

function showHelp() {
  document.getElementById('helpModal').style.display = 'flex';
}

function closeHelp() {
  document.getElementById('helpModal').style.display = 'none';
}

const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const kissDayQuotes = [
  `Every kiss with you leaves a mark on my soul, 
a promise of forever in every touch. 
Happy Kiss Day, my heart. ❤️💋`,
  `Your kisses are my favorite melody,
That plays in my heart endlessly.
Happy Kiss Day, mama!`,
  `I’m not saying a kiss from you is magical… 
but I’m pretty sure it could start a fire. 🔥💋
Happy Kiss Day, my love!`,
  `Your lips are my favorite place to be, and 
I could kiss you forever and never get enough 💋❤️
Happy Kiss Day, mama!`,
  `Your kisses are my sweetest addiction,
A feeling beyond any description.
Happy Kiss Day, my love!`,
  `A kiss from you is a moment of pure bliss,
A reminder of love’s sweet kiss.
Happy Kiss Day, mama!`,
  `Your kisses are my daily dose of joy,
A feeling no one can destroy.
Happy Kiss Day, mama!`,
  `I’m not asking for much… just a kiss, followed by another, 
and another until we can’t remember where it started. 😘🔥!
  Happy Kiss Day, mama!`,
  `One kiss from you and I’m already smiling. 💖💋
Happy Kiss Day, mamoi!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    // Build quote links from kissDayQuotes
    const quotesNr = kissDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=kiss');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = kissDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));

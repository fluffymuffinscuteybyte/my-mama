const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
  `You are my forever Valentine,
  The one who makes my heart shine.
  Happy Valentine's Day, my love!`,
  `You are my today, tomorrow, and forever,
  My love for you will never waver.
  Happy Valentine's Day, mama!`,
  `You are my sunshine on cloudy days,
  My guiding light in every way.
  Happy Valentine's Day, my love!`,
  `If love were a story, I’d want to spend every chapter with you. 
  You’re the greatest adventure I’ve ever known. 
  Happy Valentine’s Day, my love! 💘`,
  `You are the melody in my heart,
  The reason my world feels like art.
  Happy Valentine's Day, mama!`,
  `If kisses were candy, I’d give you the whole box. 
  But for today, you’ll just have to settle for me. 😘🍬💖
  Happy Valentine's Day, mama!`,
  `You are my happiness, my pride,
  The one who’s always by my side.
  Happy Valentine's Day, mama!`,
  `You are my heart’s greatest treasure,
  A love beyond any measure.
  Happy Valentine's Day, my love!`,
  `Here’s my Valentine’s Day gift for you: a lifetime of love, laughter, and kisses. 
  And maybe a little extra mischief. 😏💋
  Happy Valentine's Day, my love!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = roseDay.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=valentine');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = roseDay[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));

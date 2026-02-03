const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
  `You are the sweetest chocolate in the box of my life,
  Adding flavor to every moment,
  Making everything delightful and nice.
  Happy Chocolate Day, my mama!`,
  `Just like chocolate melts in the mouth,
  Your love melts my heart.
  Wishing you a very Happy Chocolate Day!`,
  `Chocolate’s good, but you? You’re the real treat I can’t stop craving.
  Happy Chocolate Day, mama!`,
  `Just like chocolate makes everything better,
  Your presence makes my life sweeter.
  Happy Chocolate Day, my love!`,
  `Just like chocolate, you are irresistible,
  And your love is simply unforgettable.
  Happy Chocolate Day, my love!`,
  `Careful, baby—too much chocolate and too much of me can both drive you crazy 😈🍫
  Happy Chocolate Day, mama!`,
  `Just like chocolate, you are my favorite treat,
  And your love makes my life complete.
  Happy Chocolate Day, my love!`
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

    // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=chocolate');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
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

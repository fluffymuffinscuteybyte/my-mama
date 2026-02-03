const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
  `I promise to love you forever,
And stand by you through every endeavor.
Happy Promise Day, my love!`,
  `I promise to be your strength and guide,
And always walk by your side.
Happy Promise Day, mama!`,
  `I promise to hold your hand forever,
And leave you never.
Happy Promise Day, my love!`,
  `I promise to always be the one who steals your heart… 
and maybe even your hoodie. 😉❤️
Happy Promise Day, mama!`,
  `I promise to be your partner in every dream,
And make life better than it may seem.
Happy Promise Day, my love!`,
  `I promise to be your light in the dark,
And ignite your life with a spark.
Happy Promise Day, my love!`,
  `I promise to be your shoulder to lean on,
And your strength when you feel gone.
Happy Promise Day, mama!`,
  `I promise to love you unconditionally,
And cherish you endlessly.
Happy Promise Day, mama!`,
  `I promise to make you smile every day,
And keep your worries at bay.
Happy Promise Day, mama!`,
  `I promise to always keep you wanting more, 
but don’t worry, I’ll give you just enough to make you crave me even more. 😉💖
Happy Promise Day, mama!`,
  `I promise I’ll always be your personal troublemaker, 
but I also promise to make everything better after. 😉💖
Happy Promise Day, mamoi!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from the configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = promiseDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=promise');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = promiseDayQuotes[i];
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

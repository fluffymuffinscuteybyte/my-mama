const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const teddyDayQuotes = [
  `You are my cuddly teddy bear,
Who fills my life with love and care.
Happy Teddy Day, my love!`,
  `Just like a teddy bear, you are soft and warm,
You bring comfort to my heart and calm every storm.
Happy Teddy Day, my mama!`,
  `You are my teddy bear, my forever friend,
With you, my happiness will never end.
Happy Teddy Day, mama!`,
  `Who needs a teddy bear when I have you to keep me warm at night? 
I think we both know you’re the better option 😘
Happy Teddy Day, mama!`,
  `You are my teddy bear, my partner in crime,
With you, every moment feels so sublime.
Happy Teddy Day, my love!`,
  `Just like a teddy bear, you are my safe place,
With you, I find peace and happiness.
Happy Teddy Day, my love!`,
  `You are my teddy bear, my forever hug,
With you, my heart feels snug.
Happy Teddy Day, my mama!`,
  `Just like this teddy, I want to be the one you hold onto on your best days and your worst.
Happy Teddy Day, my mama!`,
  `Give me a teddy bear, and I’ll give it back
But you? You’re staying right here in my arms.
Happy Teddy Day, mamoi!`
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
    
    const quotesCount = teddyDayQuotes.length;

    for (let i = 0; i < quotesCount; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=teddy');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = teddyDayQuotes[i];
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

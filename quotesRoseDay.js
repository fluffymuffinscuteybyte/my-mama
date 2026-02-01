const quotesDiv = document.querySelector(".quotes");
const spName = document.querySelector("#spname");
const fpName = document.querySelector("#fpname");

const roseDay = [
    `You are a Rose of My Dream,
    You are a Rose of My Heart,
    You are a Rose of My Smile,
    You are a Rose of My Life...
    HAPPY ROSE DAY!`,
    `Roses know the language of love,
    What we cannot speak, roses say.
    Take this rose as a gesture of my love,
    Wishing you a Happy Rose Day!`,
    `This Rose Day, I pray to God that the thorns on your life's path be vanished and it is filled with the beautiful petals of love, blessings and friendship. Happy Rose Day, my love!`,
    `When I looked at the red roses and you, I found that you are the most beautiful creation of God. Happy Rose Day, my mama!`,
    `People are lucky who are blessed with true love in their life... I am one of them. Happy Rose Day, my Mr.Manager!`,
    `There is no feeling for soothing and comforting than having the love of your life beside you.
    I love you, mama. Happy Rose Day!`,
    `Roses are timeless just like my love for you, my love. Happy Rose Day, my MAMA!`,
    `Out of all the unique ways of expressing love, I choose a romantic bunch of red roses for you that speak of my deep love for you…With all the warm hugs and kisses, wishing you a vivacious Rose Day, love.`,
    `You entered into my life with a fragrance of joy, You are just like a beautiful rose. Happy Rose Day!`,
    `Sending you this beautiful bouquet of red roses to express my love to you that is deep like an ocean and vast as a sky. Happy Rose Day!`,
    `Of all the attractive flowers on this planet, a rose is undoubtedly the most beautiful one. And, so are you, my Mama! Happy Rose Day!`
];

// Fetch configuration from config.json to set names.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    spName.innerText = config.spName;
    fpName.innerText = config.fpName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
  })
  .catch(error => console.error('Error loading config:', error));

const quotesNr = roseDay.length;

for (let i = 0; i < quotesNr; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', 'card.html');
  const para = document.createElement("p");
  para.classList.add("quote");
  para.innerText = roseDay[i];
  link.appendChild(para);
  quotesDiv.appendChild(link);
}

// Add click listener to save the chosen quote to localStorage.
const quoteDivs = document.querySelectorAll(".quote");
quoteDivs.forEach(quote => {
  quote.addEventListener('click', function (e) {
    const chosenQuote = e.target.innerText;
    localStorage.setItem("chosenQuote", chosenQuote);
  });
});




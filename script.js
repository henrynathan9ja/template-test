const quotes = [
    {
        text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        author: 'Thomas Edison'
    }, 
    {
        text: 'You can observe a lot just by watching.',
        author:'Yogi Berra'
    },
    {
        text: 'A house divided against itself cannot stand.',
        author: 'Abraham Lincoln'
    }, 
    {
        text: 'Fate is in your hands and no one elses.',
        author: 'Byron Pulsifer'
    }, {
        text: 'Be the chief but never the lord.',
        author: 'Lao Tzu'
    }
]

const quote = document.getElementById("quote");
const author = document.getElementById("author");

function displayQuote() {
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

    quote.textContent = randomQuotes.text;
    author.textContent = randomQuotes.author;
}

displayQuote();

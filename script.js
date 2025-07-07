const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.realinspire.live/v1/quotes/random";

async function getquote(url) {
try {
const response = await fetch(url);
const data = await response.json();

// Handle array response
if (Array.isArray(data) && data.length > 0) {
quote.textContent = data[0].content || "No quote found.";
author.textContent = data[0].author || "Unknown";
} else {
quote.textContent = "Unexpected response format.";
author.textContent = "";
}
} catch (error) {
quote.textContent = "Failed to load quote.";
author.textContent = "Failed to load author.";
console.error("Error fetching quote:", error);
}
}

getquote(api_url);

const shareBtn = document.getElementById('shareBtn');
const shareOptions = document.getElementById('share');
shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
});


const link = 'https://neth1122.github.io/Quote_generator/';

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(quote.textContent + " — " + author.textContent)}`;

const twitter = document.querySelector('.twitter');
twitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.textContent + " — " + author.textContent)}&url=${encodeURIComponent(link)}`;
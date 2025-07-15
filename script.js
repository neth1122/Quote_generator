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
const link = 'https://neth1122.github.io/Quote_generator/';
const fb = document.querySelector('.facebook');
const twitter = document.querySelector('.twitter');
const whatsapp = document.querySelector('.whatsapp');
const instagram = document.querySelector('.instagram');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    const quoteText = quote.textContent;
    const authorText = author.textContent;
    const shareMessage = `${quoteText} — ${authorText}`;

    // Facebook
    fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(shareMessage)}`;
    // X (Twitter)
    twitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(link)}`;
    // WhatsApp
    whatsapp.href = `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + link)}`;
    // Instagram (disable direct sharing, show alert)
    instagram.href = '#';
    instagram.onclick = (e) => {
        e.preventDefault();
        alert('Instagram does not support direct sharing via web. Please share the quote manually.');
    };
});
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
author.textContent = "";
console.error("Error fetching quote:", error);
}
}

getquote(api_url);

// ...existing code...

// Dropdown toggle
document.getElementById('shareBtn').onclick = function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown').classList.toggle('show');
};
// Hide dropdown when clicking outside
window.onclick = function(e) {
    if (!e.target.matches('#shareBtn')) {
        document.querySelector('.dropdown').classList.remove('show');
    }
};

// Share logic
document.getElementById('shareTwitter').onclick = function() {
    const text = `"${quote.textContent}" - ${author.textContent}`;
    this.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
};
document.getElementById('shareFacebook').onclick = function() {
    const text = `"${quote.textContent}" - ${author.textContent}`;
    this.href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(text)}`;
};
document.getElementById('shareClipboard').onclick = function() {
    const text = `"${quote.textContent}" - ${author.textContent}`;
    navigator.clipboard.writeText(text);
    alert('Quote copied to clipboard!');
};
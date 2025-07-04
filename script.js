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
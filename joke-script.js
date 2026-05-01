// Joke Generator Script
let jokeCount = 0;
let currentJoke = '';

const getJokeBtn = document.getElementById('getJokeBtn');
const jokeContent = document.getElementById('jokeContent');
const jokeLoader = document.getElementById('jokeLoader');
const jokeType = document.getElementById('jokeType');
const typeLabel = document.getElementById('typeLabel');
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');
const shareOptions = document.getElementById('shareOptions');
const jokeCountDisplay = document.getElementById('jokeCount');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

const API_URL = 'https://v2.jokeapi.dev/joke/Any?type=single,twopart';

// Get joke from API
async function fetchJoke() {
    try {
        // Show loader
        jokeLoader.style.display = 'block';
        jokeContent.style.display = 'none';
        shareBtn.style.display = 'none';
        copyBtn.style.display = 'none';
        jokeType.style.display = 'none';
        shareOptions.style.display = 'none';
        errorMessage.style.display = 'none';

        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Build the joke text
        let jokeText = '';
        if (data.type === 'single') {
            jokeText = data.joke;
            typeLabel.textContent = '📝 Single Joke';
        } else if (data.type === 'twopart') {
            jokeText = `${data.setup}\n\n${data.delivery}`;
            typeLabel.textContent = '🎭 Two-Part Joke';
        }

        currentJoke = jokeText;
        jokeCount++;

        // Display the joke
        displayJoke(jokeText);
        jokeCountDisplay.textContent = jokeCount;

    } catch (error) {
        console.error('Error fetching joke:', error);
        showError('Oops! Could not fetch a joke. Please check your internet connection and try again.');
        jokeLoader.style.display = 'none';
    }
}

// Display the joke with animation
function displayJoke(joke) {
    jokeLoader.style.display = 'none';
    jokeContent.style.display = 'block';
    jokeContent.innerHTML = `<p>${joke.replace(/\n/g, '<br>')}</p>`;
    shareBtn.style.display = 'block';
    copyBtn.style.display = 'block';
    jokeType.style.display = 'block';
    errorMessage.style.display = 'none';
}

// Show error message
function showError(message) {
    errorMessage.style.display = 'block';
    errorText.textContent = message;
    jokeContent.style.display = 'none';
    shareBtn.style.display = 'none';
    copyBtn.style.display = 'none';
    jokeType.style.display = 'none';
    shareOptions.style.display = 'none';
}

// Copy joke to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(currentJoke).then(() => {
        showFeedback('Joke copied to clipboard! 📋');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showFeedback('Failed to copy joke');
    });
}

// Show feedback message
function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// Toggle share options
function toggleShareOptions() {
    if (shareOptions.style.display === 'none' || shareOptions.style.display === '') {
        shareOptions.style.display = 'block';
    } else {
        shareOptions.style.display = 'none';
    }
}

// Share on Twitter
document.getElementById('shareTwitter').addEventListener('click', (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Check out this joke! 😂\n\n${currentJoke}\n\n#JokeGenerator`);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank', 'width=550,height=420');
});

// Share on WhatsApp
document.getElementById('shareWhatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Check out this joke! 😂\n\n${currentJoke}`);
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
});

// Share on Facebook
document.getElementById('shareFacebook').addEventListener('click', (e) => {
    e.preventDefault();
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(currentJoke)}`;
    window.open(url, '_blank', 'width=550,height=420');
});

// Event listeners
getJokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyToClipboard);
shareBtn.addEventListener('click', toggleShareOptions);

// Keyboard shortcut - Press 'J' for joke
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'j') {
        fetchJoke();
    }
});

// Load initial joke on page load
window.addEventListener('load', () => {
    // Optional: Auto-load a joke when page loads
    // Uncomment the line below if you want this behavior
    // fetchJoke();
});

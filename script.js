function fetchAndDisplayRandomQuote() {
    fetch('https://animechan.xyz/api/random')
        .then(response => response.json())
        .then(quote => {
            const quota = document.getElementById('quota');
            quota.innerHTML = `
                <h1>Anime: ${quote.anime}</h1>
                <p>Character: ${quote.character}</p>
                <p>Quote: ${quote.quote}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
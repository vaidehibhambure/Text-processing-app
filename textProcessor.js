// Function to process text by finding the most used word and wrapping it with 'foo' and 'bar'
function processText(text) {
    const words = text.match(/\b\w+\b/g);
    if (!words) return text;

    const wordCount = {};
    let mostUsedWord = words[0];
    let maxCount = 0;

    words.forEach(word => {
        word = word.toLowerCase(); // Make it case insensitive
        wordCount[word] = (wordCount[word] || 0) + 1;

        if (wordCount[word] > maxCount) {
            mostUsedWord = word;
            maxCount = wordCount[word];
        }
    });

    // Replace the most used word in the text
    const regex = new RegExp(`\\b${mostUsedWord}\\b`, 'gi');
    const processedText = text.replace(regex, `foo${mostUsedWord}foo`);

    return processedText;
}

module.exports = { processText };

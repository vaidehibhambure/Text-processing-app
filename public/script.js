import { processText } from './textProcessor.js';

document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file!');
        return;
    }

    // Read the file content using FileReader
    const reader = new FileReader();
    reader.onload = function () {
        const textContent = reader.result;
        console.log('File content read successfully');

        // Process the text content
        const processedText = processText(textContent);

        // Display the processed text
        document.getElementById('result').textContent = processedText;
    };

    reader.onerror = function () {
        alert('Failed to read the file!');
    };

    reader.readAsText(file);
});

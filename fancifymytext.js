// Initial Alert Test (can be commented out after testing)
// alert("Hello, world!");

// Function called by the "Bigger!" button
function makeBigger() {
    // Test alert (can be commented out after testing)
    // alert("Bigger button clicked!");

    // Get the text area element
    let textArea = document.getElementById("textInput");

    // Change the font size
    textArea.style.fontSize = "24pt";
}

// Function called when radio buttons change
function applyStyleChange() {
    // Test alert (can be commented out after testing)
    // alert("Radio button changed!");

    // Get references to the elements
    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancyRadio");
    let boringRadio = document.getElementById("boringRadio");

    // Check which radio button is selected
    if (fancyRadio.checked) {
        // Apply FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        // Remove FancyShmancy styles (return to normal)
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; // Or "" to rely on default/CSS
        textArea.style.textDecoration = "none";
    }
}

// Function called by the "Moo" button
function mooifyText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Split into sentences based on periods
    let sentences = text.split(".");

    // Process each sentence to add "-Moo"
    for (let i = 0; i < sentences.length; i++) {
        // Avoid adding "-Moo" to empty strings that might result from splitting
        let trimmedSentence = sentences[i].trim();
        if (trimmedSentence.length > 0) {
            let words = trimmedSentence.split(" ");
            // Add "-Moo" to the last word
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            // Join words back into the sentence part
            sentences[i] = words.join(" ");
        }
    }

    // Join sentences back together with periods
    // Note: This handles potential empty string at the end if original text ended with '.'
    text = sentences.join(".").trim(); // Use trim() again in case the join added whitespace

    // Update the text area's value
    textArea.value = text;
}
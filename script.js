let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch available voices and populate the select dropdown
function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();

    // Clear the select element before adding options
    voiceSelect.innerHTML = '';

    // Populate the select element with voice options
    voices.forEach((voice, i) => {
        let option = new Option(`${voice.name} (${voice.lang})`, i);
        voiceSelect.options.add(option);
    });

    // Set default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Event listener for voice change
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Populate the voice list when the voices change
window.speechSynthesis.onvoiceschanged = populateVoiceList;

// Event listener for button click to speak the text
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Initial population of the voice list
populateVoiceList();

// Define playlist URLs
var playlistUrls = {
    'CivilEngineering': 'https://videolectures101.github.io/civilengineering/',
    'MechanicalEngineering': 'https://videolectures101.github.io/mechanicalengineering/',
    'ElectricalEngineering': 'https://videolectures101.github.io/electricalengineering/'
};

// Get DOM elements
var topicSelector = document.getElementById('topicSelector');
var goButton = document.getElementById('goButton');

// Enable/disable button based on selection
topicSelector.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

// Navigate to selected playlist
goButton.addEventListener('click', function () {
    var selectedTopic = topicSelector.value;
    if (selectedTopic && playlistUrls[selectedTopic]) {
        window.open(playlistUrls[selectedTopic], '_blank');
    }
});

//your JS code here. If required
const button = document.querySelector('input[type="button"]')

button.addEventListener('click', () => {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex; 

    if (selectedIndex >= 0) {
        colorSelect.options[selectedIndex].remove(); 
    }
});

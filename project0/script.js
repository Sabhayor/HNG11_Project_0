document.getElementById('changeTitleButton').addEventListener('click', function() {
    let newTitle = prompt("Enter your new title:");
    if (newTitle) {
        document.getElementById('title').textContent = newTitle;
    }
});

let count = 0;

document.getElementById('add-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    if (inputText.trim() !== "") {
        count++;
        const p = document.createElement('p');
        p.textContent = inputText;
        document.getElementById('output').appendChild(p);
        
        alert(count + " linha(s) foram adicionadas");

        document.getElementById('input-text').value = '';
    } else {
        alert("Por favor, insira um texto válido.");
    }
});

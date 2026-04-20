function askAI() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const chatDisplay = document.getElementById('chat-display');
    const codeDisplay = document.getElementById('code-display');

    if(input === "") return; // Ne rien faire si c'est vide

    chatDisplay.innerHTML += `<p style="color: #007aff;"><strong>Toi :</strong> ${input}</p>`;

    let response = "Je ne comprends pas bien. Essaie 'garde', 'soin' ou 'arme'.";
    let code = "// Aucun code généré";

    // Système de réponses intelligentes
    if(input.includes("garde")) {
        response = "Voici un code pour faire apparaître un garde qui patrouille.";
        code = "using { /Fortnite.com/Devices }\n# Code Garde UEFN\nOnBegin<override>():void=\n    Print(\"Garde prêt !\")";
    } 
    else if(input.includes("soin") || input.includes("soigne")) {
        response = "D'accord, je génère une zone qui redonne de la vie.";
        code = "using { /Fortnite.com/Devices }\n# Code Soin\nOnBegin<override>():void=\n    Print(\"Zone de soin active\")";
    }
    else if(input.includes("arme") || input.includes("donner")) {
        response = "Voici le code pour donner une arme via un bouton.";
        code = "using { /Fortnite.com/Devices }\n# Item Spawner Code\nOnBegin<override>():void=\n    Print(\"Arme distribuée\")";
    }

    // L'IA répond après un petit délai
    setTimeout(() => {
        chatDisplay.innerHTML += `<p><strong>IA :</strong> ${response}</p>`;
        codeDisplay.innerText = code;
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll vers le bas
    }, 600);

    document.getElementById('user-input').value = ""; // Vide la barre
}

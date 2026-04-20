function askAI() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const chatDisplay = document.getElementById('chat-display');
    const codeDisplay = document.getElementById('code-display');

    // Ajouter ton message au chat
    chatDisplay.innerHTML += `<p><strong>Toi :</strong> ${input}</p>`;

    // Logique de réponse "intelligente"
    let response = "";
    let verseCode = "";

    if (input.includes("garde") || input.includes("ennemi")) {
        response = "D'accord, je génère un script de Garde Sentinelle.";
        verseCode = "using { /Fortnite.com/Devices }\n# Script Garde\nOnBegin<override>():void=\n    Print(\"Le garde surveille la zone\")";
    } 
    else if (input.includes("soin") || input.includes("soigne")) {
        response = "Voici un script pour une zone de soin automatique.";
        verseCode = "using { /Fortnite.com/Devices }\n# Script Soin\nOnBegin<override>():void=\n    Print(\"Zone de soin activée\")";
    }
    else {
        response = "Je ne connais pas encore ce truc, mais je peux faire un garde ou un soigneur !";
        verseCode = "// Commande non reconnue";
    }

    // Réponse de l'IA
    setTimeout(() => {
        chatDisplay.innerHTML += `<p><strong>IA :</strong> ${response}</p>`;
        codeDisplay.innerText = verseCode;
        document.getElementById('user-input').value = ""; // Vide la barre
    }, 500);
}

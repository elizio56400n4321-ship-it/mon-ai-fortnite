function askAI() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const chatDisplay = document.getElementById('chat-display');
    const codeDisplay = document.getElementById('code-display');

    if(input === "") return;

    chatDisplay.innerHTML += `<p style="color: #007aff;"><strong>Toi :</strong> ${input}</p>`;

    let response = "Désolé, je ne connais pas encore cette fonction UEFN. Pose-moi une question sur Verse, les appareils ou les personnages !";
    let code = "// En attente d'une demande précise...";

    // --- BASE DE CONNAISSANCES UEFN & VERSE ---

    if(input.includes("uefn") || input.includes("c'est quoi")) {
        response = "L'UEFN (Unreal Editor for Fortnite) est une version de l'Unreal Engine pour créer des maps Fortnite pro. On utilise le langage **Verse** pour coder.";
        code = "# Bienvenue dans l'UEFN !\n# Utilise Verse pour créer tes propres règles.";
    } 
    else if(input.includes("verse")) {
        response = "Verse est le langage de programmation d'Epic Games. Il est fait pour être rapide et éviter les bugs dans tes jeux.";
        code = "using { /Verse.org/Simulation }\nusing { /Fortnite.com/Devices }\n\nhello_world_device := class(creative_device):\n    OnBegin<override>()<suspends> : void =\n        Print(\"Bonjour le monde Verse !\")";
    }
    else if(input.includes("voler") || input.includes("vol")) {
        response = "Pour faire voler un joueur, on utilise la fonction `SetAllowFlying` sur son `fort_character`.";
        code = "using { /Fortnite.com/Characters }\n\n# Code : Autoriser le vol\nif (FC := Agent.GetFortCharacter[]): \n    FC.SetAllowFlying(true)";
    }
    else if(input.includes("saut") || input.includes("gravité")) {
        response = "Tu peux modifier la hauteur de saut d'un joueur avec le multiplicateur de mouvement.";
        code = "# Code : Super Saut\nif (FC := Agent.GetFortCharacter[]):\n    # Multiplie la force de mouvement\n    FC.SetMovementSpeedMultiplier(2.5)";
    }
    else if(input.includes("appareil") || input.includes("device")) {
        response = "Dans Verse, on appelle les objets des `creative_device`. Tu peux les lier entre eux dans l'éditeur.";
        code = "mon_appareil := class(creative_device):\n    @edit\n    MonBouton : button_device = button_device{}";
    }
    else if(input.includes("pv") || input.includes("vie") || input.includes("mort")) {
        response = "Pour changer la vie (PV), on accède aux caractéristiques du personnage.";
        code = "# Code : Vie Max\nif (FC := Agent.GetFortCharacter[]):\n    FC.SetMaxHealth(200.0)\n    FC.SetHealth(200.0)";
    }

    // Réponse de l'IA avec effet de réflexion
    setTimeout(() => {
        chatDisplay.innerHTML += `<p style="color: #ffffff;"><strong>IA Expert UEFN :</strong> ${response}</p>`;
        codeDisplay.innerText = code;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }, 400);

    document.getElementById('user-input').value = "";
}

// Support de la touche Entrée
document.getElementById("user-input").addEventListener("keypress", (e) => { if (e.key === "Enter") askAI(); });
async function askAI() {
    const input = document.getElementById('user-input').value;
    const chatDisplay = document.getElementById('chat-display');
    const codeDisplay = document.getElementById('code-display');

    if(!input) return;

    chatDisplay.innerHTML += `<p style="color: #007aff;"><strong>Toi :</strong> ${input}</p>`;
    document.getElementById('user-input').value = "";

    chatDisplay.innerHTML += `<p id="loading"><strong>IA :</strong> En train de réfléchir au code Verse...</p>`;

    try {
        // On envoie ta demande à une vraie IA de code (Mistral ou Llama)
        const response = await fetch(
            "https://api-inference.huggingface.co/models/MistralAI/Mistral-7B-Instruct-v0.2",
            {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    inputs: `Tu es un expert UEFN Fortnite. Écris un script en langage Verse pour : ${input}`,
                }),
            }
        );

        const result = await response.json();
        const aiText = result[0].generated_text;

        // On nettoie l'affichage
        document.getElementById('loading').remove();
        chatDisplay.innerHTML += `<p><strong>IA :</strong> Voici ce que j'ai créé pour toi :</p>`;
        codeDisplay.innerText = aiText; // L'IA affiche le code qu'elle vient d'inventer

    } catch (error) {
        document.getElementById('loading').innerText = "IA : Erreur de connexion au cerveau externe.";
    }
}

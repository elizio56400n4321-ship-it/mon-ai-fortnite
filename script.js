function generateCode() {
    const type = document.getElementById('ai-type').value;
    let code = "";

    if(type === "guard") {
        code = "using { /Fortnite.com/Devices }\n# IA de Garde\nOnBegin<override>():void=\n    Print(\"Garde activé\")";
    } else if(type === "boss") {
        code = "using { /Fortnite.com/Devices }\n# IA de Boss\n# PV Augmentés\nOnBegin<override>():void=\n    Print(\"Le Boss apparaît !\")";
    }

    document.getElementById('code-display').innerText = code;
}

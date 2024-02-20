document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoForca").style.backgroundColor = "gray";
});

function mostrarPersonagensForca() {
    document.getElementById('personagensForca').style.display = 'table';
    document.getElementById('personagensSombrios').style.display = 'none';
    document.getElementById("botaoForca").style.backgroundColor = "gray";
    document.getElementById("botaoSombrio").style.backgroundColor = "black";
}

function mostrarPersonagensSombrio() {
    document.getElementById('personagensForca').style.display = 'none';
    document.getElementById('personagensSombrios').style.display = 'table';
    document.getElementById("botaoForca").style.backgroundColor = "black";
    document.getElementById("botaoSombrio").style.backgroundColor = "gray";
}



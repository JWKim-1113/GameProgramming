var imageWarrior = new Image();
imageWarrior.src = "warrior.png";
imageWarrior.addEventListener("load", drawScreen, false);

function drawScreen()
{
    var theCanVas = document.getElementById("GameCanvas");
    var Context = theCanVas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0,0,800,600);

    Context.drawImage(imageWarrior,0,0);
}
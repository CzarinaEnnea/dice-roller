// DICE ROLLER

function rollDice(){
    const diceNum = document.getElementById("diceNum").value;
    const diceResults = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");

    let results = [];
    let images = [];

    for(let i = 0; i < diceNum; i++){
        const diceRandom = Math.floor((Math.random() * 6) + 1);
        results.push(diceRandom);
        images.push(`<img src="imgs/${diceRandom}.png">`);
    }

    diceResults.textContent = `Dice: ${results.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}


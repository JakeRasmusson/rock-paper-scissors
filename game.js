const myRecord = {
    wins : 0,
    losses : 0,
    ties : 0,
    r : 0,
    p : 0,
    s: 0,
    rockPercent : 0,
    paperPercent : 0,
    scissorsPercent : 0
}

const oppRecord = {
    wins : 0,
    losses : 0,
    ties : 0,
    r : 0,
    p : 0,
    s: 0,
    rockPercent : 0,
    paperPercent : 0,
    scissorsPercent : 0
}

const rpsArray = [
    'r',
    'p',
    's'
]

function game() {
    let humanChoice = prompt("r p s?").toLowerCase()
    if (rpsArray.includes(humanChoice)){
        let randomNumber = Math.floor(Math.random() * rpsArray.length)
        let oppChoice = rpsArray[randomNumber]
        const youWinString = `You win! Huzzah! You chose ${humanChoice} and the Opponent chose ${oppChoice}.`
        const youTieString = `It's a tie! You chose ${humanChoice} and the Opponent chose ${oppChoice}.`
        const youLoseString = `Rats!  You lost.  You chose ${humanChoice} and the Opponent chose ${oppChoice}.`
        if (humanChoice == oppChoice) {
            oppRecord[oppChoice] ++
            myRecord[humanChoice] ++
            oppRecord.ties ++
            myRecord.ties ++
            alert(youTieString)
        } else if (humanChoice == 'p' && oppChoice == 'r' || 
        humanChoice == 's' && oppChoice == 'p' || 
        humanChoice == 'r' && oppChoice == 's') {
            oppRecord[oppChoice] ++
            myRecord[humanChoice] ++
            myRecord.wins ++
            oppRecord.losses ++
            alert(youWinString)
        } else {
            oppRecord[oppChoice] ++
            myRecord[humanChoice] ++
            myRecord.losses ++
            oppRecord.wins ++
            alert(youLoseString)
        } 
        let humanContinue = confirm("Would you like to play again?")
        if (humanContinue) {
            game()
        } else {
            alert(`My Record: Wins ${myRecord.wins} Loses ${myRecord.losses} Ties ${myRecord.ties} 
            \n
            \n My plays: Rock ${myRecord.r} Paper ${myRecord.p} Scissors ${myRecord.s} 
            \n
            \n Opp Plays: Rock ${oppRecord.r} Paper ${oppRecord.p} Scissors ${oppRecord.s}`)
        }
    
    

    } else {
        alert('Plese enter a valid value!')
        game()
    }



}



game()
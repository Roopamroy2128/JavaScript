console.log('Hi');
//                        For user Input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please check your input again');
  }
}
//                     To take computer Input
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    //break;
    case 1:
    return 'paper';
    //break;
    case 2:
    return 'scissor';
  }
}

//                              To make comparison between User and Computer

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'game was a tie';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!.';
  } else {
    return 'Congratulations, you won!';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissor') {
      return 'Computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }
  if(userChoice === 'scissor') {
    if(computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }
  if(userChoice === 'bomb') {
    return "Congratulations, you won!";
  }

}

//                                          To declare the winner

const playGame = () => {
  const userChoice = getUserChoice('paper');    // user choice is fixed
  const computerChoice = getComputerChoice();
  console.log('User: ' + userChoice);
  console.log('Computer: ' + computerChoice);


  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
























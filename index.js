/* This was one of many exercises I did learning JavaScript in freeCodeCamp that I found really interesting. This one's called: "Counting Cards", wich basically asks us to make a function that could receive a 'card' parameter, wich can be a string or a number, and increment or decrement the global 'count' variable according to the card's value. The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.    */


var count = 0;

function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

var holdBet = "Hold"
if (count < 0){
  holdBet = "Bet"
}
return count + (count > 0 ? " Bet" : " Hold");
}



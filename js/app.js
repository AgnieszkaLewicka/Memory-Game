
 
/*
 * Create a list that holds all of your cards
 */
var cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor",
           "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf",
           "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];


//Shuffle function from http://stackoverflow.com/a/2450976 provided as a starter by Udacity 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// funciton creating a board with cards in HTML
function createBoard() {
    var list = shuffle(cards);
    list.forEach(function(card) {
        $(".deck").append('<li class="card"><i class="card fa '+card+'"></i></li>')
    })
}



//calling inital functions
shuffle(cards);
createBoard();


//refresh button
$('.restart').click(function() {
    location.reload();
});


//starting timer
var isPlaying = true
$(document).ready(function() {

function timer() {
    setTimeout(function() {
        var value = parseInt($('.timer').text())
        value += 1;
        $('.timer').text(value)
        if(isPlaying) {
            timer();
        }
    }, 1200);
}
    
timer();
});


//funcion adding amount of the moves                  
function addMove() {
    movesDone++;
    $('.moves').text(movesDone);
}
    



var movesDone = 0
var openCard = [];
var countMatch = 0
var countMiss = 0
var stars ="3"

var activeAnimation = false;

function resetFlippedCards() {
    activeAnimation = true
    openCard[0].addClass("wrong");
    openCard[1].addClass("wrong");
    openCard[0][0].parentElement.classList.add("shake")
    openCard[1][0].parentElement.classList.add("shake")
        
    setTimeout(function() {
        openCard[0].toggleClass("open show");
        openCard[1].toggleClass("open show");

        openCard[0].removeClass("wrong");
        openCard[1].removeClass("wrong");
        openCard[0][0].parentElement.classList.remove("shake")
        openCard[1][0].parentElement.classList.remove("shake")

        // reset vars
        openCard = [];
        activeAnimation = false
    }, 500);
}

//unplipping cards on click
$(".card.fa").on("click",function() {
    if (openCard.length <= 2 && $(this).hasClass("open show") === false && activeAnimation === false) {
        $(this).addClass("open show")
        openCard.push($(this));
    
        //matching logic
        if (openCard.length === 2)  {             
            // since it's the 2nd guess check for match
            if (openCard[0][0].className === openCard[1][0].className) { 
                console.log("match");
                openCard[0].addClass("match");
                openCard[1].addClass("match");
                
                openCard = [];
                addMove()
                countMatch++;
                
                Winner();
            } else { // else it's a miss
                console.log("miss"); // switch option remove open&show but add locked
                resetFlippedCards()
                //reset counter after finding match and setTime out, when they turn again
                addMove();
                countMiss++;
            }      
            starRating();  
        }
    }
});


function starRating() {

  if (movesDone > 0 && movesDone < 15) {
        stars = "3";
  } else if (movesDone >= 15 && movesDone <= 20) {
        $("#first").removeClass("fa-star");
        stars = "2";
  } else if (movesDone > 20) {
        $("#first").removeClass("fa-star");
        $("#second").removeClass("fa-star");
        stars = "1";
  }
}




//open popup when you win complete source: www.w3schools.com
function Winner(){
    if (countMatch === 8){
        isPlaying = false;
        // Get the modal
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        
        $('.seconds').text($('.timer').text())
        $('.totalMoves').text($('.moves').text())
        $('.rating').text(stars)
        
        modal.style.display = "block";


        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        $("#playAgain").on("click", function() {
       location.reload()
   });

        
    }
}




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

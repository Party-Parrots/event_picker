'use strict';
//This array is and the name of the variable is effectively the only thing that's
//different from both arts.js and learning.js. This could be extracted out into another
//file and you could use the same logic for all three. This would save you at least
//700 lines of code. The way I did it was to create another file that had just the
//array of data in it, change the variable name to something generic and include that
//script in a tag above the main logic in each file.


var sportsArray = [['Basketball', 'Football', 'Soccer'],
                   ['College', 'Semi-Pro', 'Pro'],       // used for all 3 main categories
                   ['Beavers', 'Vikings', 'Ducks'],      // used for all college sports
                   ['Energy', 'Rainmakers', 'Chinooks'], // semi-pro basketball
                   ['Blazers', 'Fire', 'Storm'],         // pro basketball
                   ['Raiders', 'Stallions', 'Boltz'],    // semi-pro football
                   ['Seahawks', 'Steel', 'Shockwave'],   // pro football
                   ['Victory', 'Stars'],                 // semi-pro soccer
                   ['Timbers', 'Thorns', 'Sounders']];   // pro soccer

// sets the stored array to what is in local storage
var storedArray = JSON.parse(localStorage.getItem('storedArray'));;

// checks if something is in local storage
// if null, sets storedArray equal to an empty array
if (!storedArray) {
  storedArray = [];
}

var main = document.getElementById('main');
var oneOne = document.getElementById('1_1');
var oneTwo = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

// names refer to the tier and item in that tier
oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);


// used to short circuit click handlers once clicked
var tierOneClicked = false;

// Try not to leave commented out code in final products.
// var tierTwoClicked = false;
// var tierThreeClicked = false;

// Baskbetball
// click handler


//I'm mostly going to comment on just this first event handler since the three of
//them are pretty much the same thing.

function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-1';
    main.appendChild(tierTwo);

  // creates individual divs/categories
    for (var i = 0; i < sportsArray[1].length; i++) {
      var subCategory = document.createElement('div');
      var h3 = document.createElement('h3'); // add this line
      h3.textContent = sportsArray[1][i]; // change subCategory to h3
      tierTwo.classList.add('tier_2');
      subCategory.appendChild(h3); // add this line
      tierTwo.appendChild(subCategory);

      // adds on click functions to the subcategories
      // Basketball --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-1';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            //This could be refactored to get the text data
            //for the array from the event.target of the click
            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][2]);
              };
            }
          }
        };

      // Basketball --> Semi-Pro --- Index [3]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[3].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[3][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[3][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[3][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[3][2]);
              };
            }
          }
        };

      // Basketball --> Pro --- Index [4]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[4].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[4][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[4][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[4][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[4][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Football
// click handler
function oneTwoClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-2';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      var h3 = document.createElement('h3');
      h3.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      subCategory.appendChild(h3);
      tierTwo.appendChild(subCategory);

      // Football --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][2]);
              };
            }
          }
        };

      // Football --> Semi-pro --- Index [5]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[5].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[5][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[5][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[5][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[5][2]);
              };
            }
          }
        };

      // Football --> Pro --- Index [6]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[6].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[6][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[6][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[6][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[6][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Soccer
// click handler
function oneThreeClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      var h3 = document.createElement('h3');
      h3.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      subCategory.appendChild(h3);
      tierTwo.appendChild(subCategory);

      // Soccer --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[2][2]);
              };
            }
          }
        };

      // Soccer --> Semi-pro --- Index [7]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[7].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[7][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[7][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[7][1]);
              };
            }
          }
        };

      // Soccer --> Pro --- Index [8]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-5';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[8].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = sportsArray[8][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[8][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[8][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(sportsArray[8][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}


var results = document.getElementById('results');
results.addEventListener('click', resultsHandler);
function resultsHandler() {

  var storeArray = JSON.stringify(storedArray);
  localStorage.setItem('storedArray', storeArray);
  // location.reload();

}

var newTree = document.getElementById('refresh');
newTree.addEventListener('click', newTreeHandler);

function newTreeHandler() {
  var storeArray = JSON.stringify(storedArray);
  localStorage.setItem('storedArray', storeArray);
  location.reload();
};

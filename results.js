'use strict';

// Add user list to local storage
var array = JSON.parse(localStorage.getItem('storedArray'));

var list = document.getElementById('list');
var ul = document.createElement('ul');

//It's neat that you tried to use a try/catch here, but it probably would
//have been a bit more simple/clear to just check whether or not the array
//existed with something like if(array).
try {
  for (var i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    li.textContent = array[i];
    ul.appendChild(li);
    list.appendChild(ul);
  }
} catch(e) {
  console.log('Array is empty');
}

// Add functionality to user input list rating feature
var ratings = [];
var totalRating;
var avgRating;

var rateForm = document.getElementById('rating');
rateForm.addEventListener('submit', submitRating);
//the rating would probably be a good thing to track on local storage as well
function submitRating() {
  totalRating = 0;
  event.preventDefault();
  ratings.push(Number(event.target.rating.value));
  for (var i = 0; i < ratings.length; i++) {
    totalRating += ratings[i];
    console.log('Total Rating:', totalRating);
    avgRating = totalRating / ratings.length;
    avgRating = (Math.round(avgRating * 2) / 2).toFixed(1);
    console.log('Average Rating:', avgRating);
  }
  var averageRating = document.getElementById('avg_rating');
  averageRating.textContent = 'Average Rating: ' + avgRating;
}

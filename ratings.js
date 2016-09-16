'use strict';

var ratings = [];
var totalRating;
var avgRating;

var rateForm = document.getElementById('rating');
rateForm.addEventListener('submit', submitRating);

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
ls

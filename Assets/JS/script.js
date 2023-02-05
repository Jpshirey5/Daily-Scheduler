// JQuery Code that wraps all code and fires it after the HTML has completed.
$(document).ready(function() {
  
  // Applying the past, present, or future classes to each time block.
  // Current hour
  let currentHour = new Date().getHours();
  let today

  // Loop through each time block
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    // Compare the id to the current hour
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
      }
   });
  });

  // User inputs and Saving to Local Storage
$('textarea').each(function() {
  var textAreaId = $(this).attr('id');
  
  if (localStorage.getItem(textAreaId)) {
    $(this).val(localStorage.getItem(textAreaId));
  }

  $(this).on('change', function() {
    localStorage.setItem(textAreaId, $(this).val());
  });
});

  // Display day and date
const currentDateTime = dayjs().format('dddd, MMMM DD, YYYY');
  document.getElementById("currentDay").innerHTML = currentDateTime;
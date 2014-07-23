
$(document).ready(function(){
	// Create array with food images in it

	var f1 = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", 
			  "images/food4.jpg", "images/food5.jpg", "images/food6.jpg",
			  "images/food7.jpg", "images/food8.jpg"];
	// Store first element in variable

	var f2 = f1[0];

	// Get length of foodArray

	var f3 = f1.length

	// Store last element

	var f4 = f1[f1.length-1];








	// Skip button moves image to next image in array1
	// Create variable to store index
		var fIndex = 0;

		$('#skip').on('click', function() {
			fIndex++;
			if (fIndex > f3) { fIndex = 0; } else {
			$('#image-to-vote-on').attr('src', f1[fIndex]); }
		});

	// Back button moves to previous image in array1

			$('#back').on('click', function() {
			fIndex--;
			$('#image-to-vote-on').attr('src', f1[fIndex]);
		});

	// Create 2nd array. Selector puts number in second array.

		// var r1 = 0;

	// Once you hit 6 ratings , it sums then averages (sum/length of array2) and displays
	// the average above the buttons. If you rate again it updates average


});
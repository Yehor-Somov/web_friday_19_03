$(document).ready(function () {
	$(".taho").knob({
		'angleArc': 250,
		'angleOffset': -125,
		'min' : 0,
		'max' : 8000
	});

	$(".speed").knob({
		'angleArc': 250,
		'angleOffset': -125,
		'min' : 0,
		'max' : 220,
		'width': 300,
		'height': 300
	});

	$(".benz").knob({
		'angleArc': 90,
		'angleOffset': -10,
		'min' : 0,
		'max' : 40,
		'width': 100,
		'height': 100
	});
});
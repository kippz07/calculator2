


run();

function run () {
	var loop = true;

	while(loop) {

		var choice = '';

		var choiceloop = true;

		var num1 = prompt('Enter the first value:');
		var fnum1 = parseFloat(num1);

		var num2 = prompt('Enter the second value');
		var fnum2 = parseFloat(num2);

		var option = prompt('Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision?');

		while (option != 'a' && option != 's' && option != 'm' && option != 'd' && option != '') {
			option = prompt('Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision?');
		}

		switch (option) {

			case 's': 
				choice = prompt('The answer is ' + subtraction(fnum1, fnum2) + '. Press enter to make another calculation or enter q to quit.');
				break;

			case 'm': 
				choice = prompt('The answer is ' + muliplication(fnum1, fnum2) + '. Press enter to make another calculation or enter q to quit.');
				break;

			case 'd': 
				choice = prompt('The answer is ' + division(fnum1, fnum2) + '. Press enter to make another calculation or enter q to quit.');
				break;

			case '': ;

			case 'a': 
				choice = prompt('The answer is ' + addition(fnum1, fnum2) + '. Press enter to make another calculation or enter q to quit.');
				break;
		}

		while(choiceloop) {

			if (choice === '') {
				choiceloop = false;
				loop = true;
			} else if (choice === 'q') {
				choiceloop = false;
				loop = false;
			} else {
				choiceloop = true;
				choice = prompt('Press enter to make another calculation or enter q to quit.');	
			}
		}

		if (choice === 'q'){
			loop = false;
		}
	}
}

function addition (num1, num2) {
	return num1 + num2;
}

function subtraction (num1, num2) {
	return num1 - num2;
}

function muliplication (num1, num2) {
	return num1 * num2;
}

function division (num1, num2) {
	return num1 / num2;
}



run();

function run () {
	var loop = true;

	while(loop) {

		var choice = '';

		var choiceloop = true;

		var option = prompt('Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication, (d)ivision, (p)ower of or square (r)oot?');

		while (option != 'a' && option != 's' && option != 'm' && option != 'd' && option != '' && option != 'p' && option != 'r') {
			option = prompt('Would you like to do (a)ddition, (s)ubtraction, (m)ultiplication, (d)ivision, (p)ower of or square (r)oot?');
		}

		if (option === 'r') {
			var num1 = prompt('Enter the value:');
			var fnum1 = parseFloat(num1)
			choice = prompt('The answer is ' + root(fnum1) + '. Press enter to make another calculation or enter q to quit.');
		} else {

			var num1 = prompt('Enter the first value:');
			var fnum1 = parseFloat(num1);

			var num2 = prompt('Enter the second value');
			var fnum2 = parseFloat(num2);
			
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

				case 'p': 
					choice = prompt('The answer is ' + power(fnum1, fnum2) + '. Press enter to make another calculation or enter q to quit.');
				break;
			}
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

function power (num, pow) {
	return Math.pow(num, pow);
}

function root (num) {
	return Math.sqrt(num);
}

















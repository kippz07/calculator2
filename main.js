var loop = true;
var optionSet = new Set(['a', 's', 'm', 'd', '', 'p', 'r', 2, 3, 'n', 'l', 'i', 'w'])

run();

function run () {
	
	while(loop) {

		var choice = '';
		var option = input();
		choice = userOption(option);
		end();
	}
}

function input () {
	var option = prompt('What would you like to do: \n- (a)ddition \n- (s)ubtraction \n- (m)ultiplication \n- (d)ivision \n- (p)ower of \n- square (r)oot \n- largest of (2) \n- largest of (3) \n- (n)umber of words in a sentance \n- (l)ongest word in sentance \n- number of (i)nstances of a word \n(- w)ords longer than a length');

		while (!optionSet.has(option)) {
			option = prompt('What would you like to do: \n- (a)ddition \n- (s)ubtraction \n- (m)ultiplication \n- (d)ivision \n- (p)ower of \n- square (r)oot \n- largest of (2) \n- largest of (3) \n- (n)umber of words in a sentance \n- (l)ongest word in sentance \n- number of (i)nstances of a word \n(- w)ords longer than a length');
		}
	return option;
}

function end () {
	var choiceloop = true;

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

function userOption (option) {

	var choice = '';
	switch (option) {
		case 'r': 
			choice = userChoice(root());
			break;

		case '3':
			choice = userChoice(largestThree());
			break;

		case 'l':
			choice = userChoice(longestWord());

		case 'n':
			choice = userChoice(numOfWords());
			break;

		case 'i':
			choice = userChoice(number());

		case 'w':
			choice = userChoice(longerThan());
			break;

		case 's':
			choice = subtraction(firstNumber(), secondNumber()); 
			break;

		case 'm': 
			choice = muliplication(firstNumber(), secondNumber());
			break;

		case 'd': 
			choice = division(firstNumber(), secondNumber());
			break;

		case '': ;

		case 'a': 
			choice = addition(firstNumber(), secondNumber());
			break;

		case 'p': 
			choice = power(firstNumber(), secondNumber());
			break;

		case '2': 
			choice = largestTwo(firstNumber(), secondNumber());
			break;
		}

	return choice;
}

function userChoice (str) {

	choice = prompt('The answer is ' + str + '. Press enter to make another calculation or enter q to quit.');
	return choice;
}

function firstNumber () {
	var num1 = prompt('Enter the first value:');
	var fnum1 = parseFloat(num1);
	return fnum1;
}

function secondNumber() {
	var num2 = prompt('Enter the second value');
	var fnum2 = parseFloat(num2);
	return fnum2;
}

function addition (num1, num2) {
	choice = prompt('The answer is ' + (num1 + num2) + '. Press enter to make another calculation or enter q to quit.');
	
	return choice;
}

function subtraction (num1, num2) {
	choice = prompt('The answer is ' + (num1 - num2) + '. Press enter to make another calculation or enter q to quit.');
					
	return choice;
}

function muliplication (num1, num2) {
	choice = prompt('The answer is ' + (num1 * num2) + '. Press enter to make another calculation or enter q to quit.');
	
	return choice;
}

function division (num1, num2) {
	choice = prompt('The answer is ' + (num1 / num2) + '. Press enter to make another calculation or enter q to quit.');
	
	return choice;
}

function power (num, pow) {
	choice = prompt('The answer is ' + (Math.pow(num, pow)) + '. Press enter to make another calculation or enter q to quit.');
	
	return choice;
}

function root () {
	var num1 = prompt('Enter the value:');
	var fnum1 = parseFloat(num1);
	return Math.sqrt(fnum1);
}

function largestTwo (num1, num2) {
	choice = prompt('The answer is ' + (Math.max(num1, num2)) + '. Press enter to make another calculation or enter q to quit.');
	
	return choice;
}

function largestThree () {
	var num1 = prompt('Enter the value:');
	var fnum1 = parseFloat(num1);
	var num2 = prompt('Enter the value:');
	var fnum2 = parseFloat(num2);
	var num3 = prompt('Enter the value:');
	var fnum3 = parseFloat(num3);	
		
	return Math.max(fnum1, fnum2, fnum3);
}

function numOfWords () {
	var words = prompt("Enter a sentance: ");
	var words = words.split(' ');
	return words.length;
}

function longestWord () {
	var words = prompt("Enter a sentance: ");
	var words = words.split(' ');
	var length = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > length) {
			length = words[i].length;
		}
	}
	return length;
}

function number () {
	var words = prompt("Enter a sentance: ");
	var words = words.split(' ');
	var word = prompt("Enter a word in your sentance: ")
	var count = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i] === word) {
			count++;
		}
	}
	return count;
}

function longerThan (length) {
	var words = prompt("Enter a sentance: ");
	var words = words.split(' ');
	var length = prompt("Enter a word length: ")
	var new_string = '';
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > length) {
			new_string += words[i] + ' ';
		}
	}
	return new_string;
}








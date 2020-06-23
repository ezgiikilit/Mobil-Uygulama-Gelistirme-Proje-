function checkts1(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Mizah") {
		correct++;
}
	if (question2 == "Damat") {
		correct++;
}	
	if (question3 == "Get mad") {
		correct++;
	}
	
	if (question4 == "Sew") {
		correct++;
	}
	
	if (question5 == "Güven") {
		correct++;
	}
	
	if (question6 == "Macera") {
		correct++;
	}
	
	if (question7 == "Scream") {
		correct++;
	}
	
	if (question8 == "Lawyer") {
		correct++;
	}
	
	if (question9 == "Expect") {
		correct++;
	}
	
	if (question10 == "Journalist") {
		correct++;
	}
	
	
	
	
	
	var pictures = ["./assets/img/win.gif", "./assets/img/meh.gif", "./assets/img/loser.gif"];
	var messages = ["Great job!", "That's just okay.", "You really need to do better."];
	var score;

	
	if (correct == 0) { // loser 
		score = 2;
	}

	if (correct > 0 && correct < 10) { // doğru sayısı 0-9 arası ise  10 dahil degil 
		score = 1;
	}

	if (correct == 10) {// tumu başarlili ise 
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	document.getElementById("picture").src = pictures[score];
	}
	

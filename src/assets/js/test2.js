function checkts2(){

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


	if (question1 == "Dikkatsiz") {
		correct++;
}
	if (question2 == "Rehin") {
		correct++;
}	
	if (question3 == "Samimi") {
		correct++;
	}
	
	if (question4 == "Blame") {
		correct++;
	}
	
	if (question5 == "Elçilik") {
		correct++;
	}
	
	if (question6 == "Bağımsız") {
		correct++;
	}
	
	if (question7 == "Receipt") {
		correct++;
	}
	
	if (question8 == "Witness") {
		correct++;
	}
	
	if (question9 == "Bleak") {
		correct++;
	}
	
	if (question10 == "Achievement") {
		correct++;
	}
	
	
	
	
	
	var pictures = ["./assets/img/win.gif", "./assets/img/meh.gif", "./assets/img/loser.gif"];
	var messages = ["Great job!", "That's just okay.", "You really need to do better."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	document.getElementById("picture").src = pictures[score];
	}
	
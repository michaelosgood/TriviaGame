//Michael Osgood / Game of Thrones Trivia Game
$("#start").on("click",function(){ //execute this function when the start button is clicked
	game.start();
})

$(document).on("click","#end",function(){ //waits for page to load entirely before executing this code (done button gets created after timer runs out)
	game.done();//exectues the game.done function when the button with #end is clicked on
})
var audio = new Audio("assets/audio/GameOfThrones.mp3"); //variable for theme song

var questions = [{
	question: "1. Who killed Robb Stark?",
	answers: ["Joffrey Baratheon", "Theon Greyjoy","Roose Bolton","Cregor Clegane"],
	correctAnswer: 'Roose Bolton '
}, {
	question: "2. What is the name of Arya Stark's sword?",
	answers: ["Whistle ","Needle ","Thumbnail ","Hrunting "],
	correctAnswer: "Needle "
}, {
	question: "3. Who killed Ned Stark?",
	answers: ["Cregor Clegane ","Roose Bolton ","Cersei Lannister ","Joffrey Baratheon "],
	correctAnswer: "Joffrey Baratheon "
}, {
	question: "4. Who killed Tywin Lannister?",
	answers: ["Tyrion Lannister ","Roose Bolton ","Ned Stark ","Daenerys Targaryen "],
	correctAnswer: "Tyrion Lannister "
}, {
	question: "5. How did Tommen Baratheon die?",
	answers: ["Starvation ","Illness ","Murdered ","Suicide "],
	correctAnswer: "Suicide "
}, {
	question: "6. Who killed the High Sparrow?",
	answers: ["Daario Naharis ","Cersei Lannister ","Jamie Lannister ","Grey Worm "],
	correctAnswer: "Cersei Lannister "
}, {
	question: "7. Who has been nicknamed the Kingslayer?",
	answers: ["Jamie Lannister ","Tyrion Lannister ","Sansa Stark ","Robb Stark "],
	correctAnswer: "Jamie Lannister "
}, {
	question: "8. Who tortures Theon Greyjoy?",
	answers: ["Ramsay Bolton ","Joffrey Lannister ","Robb Stark ","Daenerys Targaryen "],
	correctAnswer: "Ramsay Bolton "
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){ //my countdown function
		game.counter--; //subtracts 1 from the game.counter
		$("#counter").html(game.counter); //displays the counter on our html page
		if(game.counter<=0){ //this executes when game.counter is less than or equal to 0
			console.log("Your Time is Up!"); //console logs that time is up
			game.done(); //game.done function is ran
		}
	},
	start: function() {
		timer = setInterval(game.countdown, 1000); //every 1000 ms, the countdown function will execute
		audio.play();//plays the Game of Thrones theme song
		$("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>'); //adds the time remaining to our html file
		$("#start").remove(); //removes the start button after it is clicked
		console.log("start button clicked"); //verifies that start button was clicked
		for(var i=0; i<questions.length; i++){  //variable i is used to display each individual question in our questions array
			$("#subwrapper").append("<h2>"+ questions[i].question+"</h2>"); //append the subwrapper with questions
			for(var j=0; j<questions[i].answers.length; j++){
				$("#subwrapper").append("<input type='radio' name='question"+i+"value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
		$("#subwrapper").append('<br><br><button id="end">Done</button>')//creates the Done button after timer is up
	},
	done: function(){ //once the countdown timer is up, this function will execute
		$.each($("input[name='question-0']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[0].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[1].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[2].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[3].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[4].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-5']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[5].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-6']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[6].correctAnswer){
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-7']:checked"),function(){ //.each() looks for every element within its paranthesis
			if($(this).val()===questions[7].correctAnswer) {
				game.correct++;
			} 
			else {
				game.incorrect++;
			}
		});
		this.result(); //prints the results of the game
		},

		result: function(){ //used to display results after time is up or done button is clicked
			clearInterval(timer); //clears the timer interval
			$("#subwrapper h2").remove(); //removes my subwrapper and h2 element
			$("#subwrapper").html("<h2>All done!</h2>"); //All done will apper
			$("#subwrapper").append("<h3>Correct Answer: "+this.correct+"</h3>"); //display the number of correct answers
			$("#subwrapper").append("<h3>Inorrect Answer: "+this.incorrect+"</h3>");//display the number of incorrect answers
			$("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>"); //displays number of unanswered questions
		}
	}


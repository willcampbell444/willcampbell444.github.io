var pronouns = ["je", "tu", "il", "nous", "vous", "ils"];
var wrong = {};
var newWrong = {};
var round = 1;
var word = 0;
var victory = false;
var attempts = 0;
var maximum;
var tense;
var answer;

verbs = verbs

function getVerb(question, responce) {
	if(responce == answer || responce == pronoms[num]+' '+answer) {
		document.getElementById('input').style.borderColor = "#474747"
		nextVerb();
	}
	else {
		check += 1
		document.getElementById('input').style.borderColor = "#8F0000"
		if (check == 5) {question.innerHTML = question.innerHTML + " - " + answer}
		if (check == 1) {mistakes[question.innerHTML] = answer}
	}
};

function nextVerb() {
	attempts = 0;

	if (round == 1 && word != maximum) {
		// document.getElementById('progress').value = word.toString();
		word += 1
		console.log(word)
		infinitifs = Object.keys(verbs)
		infinitif = infinitifs[Math.floor(Math.random()*infinitifs.length)]
		pronoun = Math.floor(Math.random()*5)
		answer = verbs[infinitif][pronoun]
		document.getElementById('question').innerHTML = pronouns[pronoun] + ", " + infinitif
	} else {
		// if (wrong === {})
		if (Object.keys(newWrong).length && !Object.keys(wrong).length) {
			// console.log(round+1)
			round += 1;
			// document.getElementById('progress').max = Object.keys(newWrong).length.toString();
			// document.getElementById('progress').value = '0';
			word = 1;
			wrong = newWrong;
			newWrong = {};
			// console.log(wrong)
			rand = Math.floor(Math.random()*Object.keys(wrong).length);
			key = Object.keys(wrong)[rand];
			document.getElementById('question').innerHTML = key;
			answer = wrong[key];
			delete wrong[key];
		} else if (Object.keys(wrong).length) {
			// document.getElementById('progress').value = word.toString();
			word += 1;
			rand = Math.floor(Math.random()*Object.keys(wrong).length);
			key = Object.keys(wrong)[rand];
			document.getElementById('question').innerHTML = key;
			answer = wrong[key];
			delete wrong[key];
		} else {
			// document.getElementById('progress').max = '0';;
			document.getElementById('tense').innerHTML = 'You Win';;
			document.getElementById('question').innerHTML = "---";
			victory = true;
		}
	}
	
	document.getElementById('round').innerHTML = 'Round '+round+', Word '+word

// 	if(check == 0) {
// 		right += 1
// 	}
// 	if(total > 0) {
// 		document.getElementById("score").innerHTML = right + " out of " + total + " - " + Math.round((right/total)*100) + "%";
// 	}
// 	check = 0;
// 	total += 1;
// 	infinitifs = Object.keys(verbs);
// 	infinitif = infinitifs[Math.floor(Math.random()*infinitifs.length)];
// 	num = Math.floor(Math.random()*6);
// 	answer = verbs[infinitif][num]
// 	question.innerHTML = pronoms[num] + ", " + infinitif;
}

function codeAddress() {
	selectBox = document.getElementById('tense_choice');
	keys = Object.keys(verbs).sort()
	for (i in keys) {
		option = document.createElement("option");
		option.textContent = keys[i];
		option.value = keys[i];
		selectBox.add(option);
	}
	$('#input').submit(function () {
		if (!tense) {
			tense = document.getElementById("tense_choice").value
			maximum = document.getElementById("verbs").value
			verbs = verbs[tense]

			document.getElementById('tense').innerHTML = tense

			input = document.getElementById("input");
			input.removeChild(document.getElementById('tense_choice'));
			input.removeChild(document.getElementById('verbs'));
			input.removeChild(document.getElementById('submit'));

			p = document.createElement("p");
			p.id = "round";
			p.innerHTML = "Round 1, Word 1";
			input.appendChild(p)

			p = document.createElement("p");
			p.id = "question";
			p.innerHTML = "test";
			input.appendChild(p)

			input_line = document.createElement('input');
			input_line.id = 'text';
			input_line.type = 'text';
			input_line.autocorrect = "off"
			input_line.autocapitalize = "off"
			input_line.autocomplete = 'off';
			input.appendChild(input_line)

			// progress_bar = document.createElement('progress');
			// progress_bar.id = 'progress';
			// progress_bar.max = maximum.toString();
			// progress_bar.value = '0'
			// progress_bar.className = "option";
			// input.appendChild(progress_bar)

			div = document.createElement('div');
			input.appendChild(div)

			submit_button = document.createElement('input');
			submit_button.id = 'submit';
			submit_button.type = 'submit';
			submit_button.className = 'btn btn-lg btn-primary btn-block';
			input.appendChild(submit_button)

			nextVerb()
		} else {
			// console.log(newWrong)
			// console.log(wrong)
			if (victory) {
				return
			} else if (document.getElementById("text").value == answer) {
				nextVerb()
			} else {
				attempts += 1
				if (attempts == 5) {
					document.getElementById("question").innerHTML += ": " + answer
				} else if (attempts == 1) {
					newWrong[document.getElementById("question").innerHTML] = answer
				}
			}
			document.getElementById("text").value = ''
		};

		return false;
	})
};

window.onload = codeAddress;

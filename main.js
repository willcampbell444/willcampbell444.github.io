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
		document.getElementById('progress').value = word.toString();
		word += 1
		infinitifs = Object.keys(verbs)
		infinitif = infinitifs[Math.floor(Math.random()*infinitifs.length)]
		pronoun = Math.floor(Math.random()*5)
		answer = verbs[infinitif][pronoun]
		document.getElementById('question').innerHTML = pronouns[pronoun] + ", " + infinitif
	} else {
		console.log(wrong)
		if (wrong === {}) {"POSD"}
		if (Object.keys(newWrong).length && !Object.keys(wrong).length) {
			round += 1;
			document.getElementById('progress').max = Object.keys(newWrong).length.toString();
			document.getElementById('progress').value = '0';
			word = 1;
			wrong = newWrong;
			newWrong = {};
			console.log(wrong)
			rand = Math.floor(Math.random()*Object.keys(wrong).length);
			key = Object.keys(wrong)[rand];
			document.getElementById('question').innerHTML = key;
			answer = wrong[key];
			delete wrong[key];
		} else if (Object.keys(wrong).length) {
			document.getElementById('progress').value = word.toString();
			word += 1;
			rand = Math.floor(Math.random()*Object.keys(wrong).length);
			key = Object.keys(wrong)[rand];
			document.getElementById('question').innerHTML = key;
			answer = wrong[key];
			delete wrong[key];
		} else {
			document.getElementById('progress').max = '0';;
			document.getElementById('tense').innerHTML = 'You Win';;
			document.getElementById('question').innerHTML = "---";
			victory = true;
		}
	}
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
			poop = document.getElementById("poop");
			poop.removeChild(document.getElementById('tense_choice'));
			poop.removeChild(document.getElementById('verbs'));
			poop.removeChild(document.getElementById('submit'));

			input_line = document.createElement('input');
			input_line.id = 'text';
			input_line.type = 'text';
			input_line.autocorrect = "off"
			input_line.autocapitalize = "off"
			input_line.autocomplete = 'off';
			poop.appendChild(input_line)

			submit_button = document.createElement('input');
			submit_button.id = 'submit';
			submit_button.type = 'submit';
			poop.appendChild(submit_button)

			progress_bar = document.createElement('progress');
			progress_bar.id = 'progress';
			progress_bar.max = maximum.toString();
			progress_bar.value = '0'
			progress_bar.className = "option";
			poop.appendChild(progress_bar)

			p = document.createElement("p");
			p.id = "question";
			p.innerHTML = "test";
			input.insertBefore(p, input.firstChild);

			nextVerb()
		} else {
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

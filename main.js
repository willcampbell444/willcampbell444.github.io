var pronoms = ["je", "tu", "il", "nous", "vous", "ils"];
var infinitifs;
var infinitif;
var num;
var right = 0;
var total = 0;
var round = 1;
var answer;
var mistakes = {};
var questions;
var check;

verbs = verbs["Présent Subjunctive"]

function getVerb(question, responce) {
	console.log(responce)
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
	if(check == 0) {
		right += 1
	}
	if(total > 0) {
		document.getElementById("score").innerHTML = right + " out of " + total + " - " + Math.round((right/total)*100) + "%";
	}
	check = 0;
	total += 1;
	infinitifs = Object.keys(verbs);
	infinitif = infinitifs[Math.floor(Math.random()*infinitifs.length)];
	num = Math.floor(Math.random()*6);
	answer = verbs[infinitif][num]
	question.innerHTML = pronoms[num] + ", " + infinitif;
}

function codeAddress() {
	nextVerb();
	$('#input').submit(function (text) {
		getVerb(document.getElementById('question'), document.getElementById('text').value);
		document.getElementById('text').value = "";
		return false;
})};

window.onload = codeAddress;
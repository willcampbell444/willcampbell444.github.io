// wrong = "#8F0000"
// right = "#474747"

var verbs = {
	"avoir": ["ai", "as", "a", "avons", "avez", "ont"],
	"être": ["suis", "es", "est", "sommes", "êtes", "sont"],
	"acquérir": ["acquiers", "acquiers", "acquiert", "acquérons", "acquérez", "acquièrent"],
	"aller": ["vais", "vas", "va", "allons", "allez", "vont"],
	"apprendre": ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
	"battre": ["bats", "bats", "bat", "battons", "battez", "battent"],
	"comprendre": ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
	"conduire": ["conduis", "conduis", "conduit", "conduisons", "conduisez", "conduisent"],
	"coudre": ["couds", "couds", "coud", "cousons", "cousez", "cousent"],
	"craindre": ["crains", "crains", "craint", "craignons", "craignez", "craignent"],
	"devoir": ["dois", "dois", "doit", "devons", "devez", "doivent"],
	"devenir": ["deviens", "deviens", "devient", "devenons", "devenez", "deviennent"],
	"asseoir (e)": ["assieds", "assieds", "assied", "asseyons", "asseyez", "asseyent"],
	"asseoir (o)": ["assois", "assois", "assoit", "assoyons", "assoyez", "assoient"],
	"boire": ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
	"connaître": ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
	"courir": ["cours", "cours", "court", "courons", "courez", "courent"],
	"dire": ["dis", "dis", "dit", "disons", "dites", "disent"],
	"cueillir": ["cueille", "cueilles", "cueille", "cueillons", "cueillez", "cueillent"],
	"croire": ["crois", "crois", "croit", "croyons", "croyez", "croient"]};
var pronoms = ["je", "tu", "il", "nous", "vous", "ils"];
var infinitifs;
var infinitif;
var num;
var right = 0;
var total = 0;
var check;

function getVerb(question, answer) {
	console.log(answer);
	if(answer == verbs[infinitif][num]) {
		document.getElementById('input').style.borderColor = "#474747"
		nextVerb();
	}
	else {
		check += 1
		document.getElementById('input').style.borderColor = "#8F0000"
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
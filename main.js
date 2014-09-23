// wrong = "#8F0000"
// right = "#474747"

var verbs = {
	"ecrire": ["écris", "écris", "écrit", "ecrivons", "écrivez", "écrivent"],
	"être": ["suis", "es", "est", "sommes", "êtes", "sont"],
	"envoyer": ["envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"],
	"faire": ["fais", "fais", "fait", "faisons", "faites", "font"],
	"fuir": ["fuis", "fuis", "fuit", "fuyons", "fuyez", "fuient"],
	"haïr": ["hais", "hais", "hait", "haïssons", "haïssez", "haïssent"],
	"lire": ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
	"mettre": ["mets", "mets", "met", "mettons", "mettez", "mettent"],
	"mourir": ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
	"naitre": ["nais", "nais", "naît", "naissons", "naissez", "naissent"],
	"ouvrir": ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
	"partir": ["pars", "pars", "part", "partons", "partez", "partent"],
	"plaire": ["plais", "plais", "plaît", "plaisons", "plaisez", "plaisent"],
	"pouvoir": ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
	"prendre": ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
	"recevoir": ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
	"résoudre": ["résous", "résous", "résout", "résolvons", "résolvez", "résolvent"],
	"rire": ["ris", "ris", "rit", "rions", "riez", "rient"],
	"rontre": ["romps", "romps", "rompt", "rompons", "rompez", "rompent"],
	"savoir": ["sais", "sais", "sait", "savons", "savez", "savent"],
	"sortir": ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
	"suivre": ["suis", "suis", "suit", "suivons", "suivez", "suivent"]};
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
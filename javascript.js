const helloSpeaker = {
	speakWord: 'Hello',	
};


(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());



const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());


(function () {
	var names = ['John', 'Jass', 'Jason','Farida', 'Lisa', 'Pooja','Jack','kritali','mannu'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0);
		if (firstLetter === 'j'||firstLetter === 'J'){
			console.log(byeSpeaker.speak(name));

		} else {
			console.log(helloSpeaker.speak(name));
			
		}
	}
})();
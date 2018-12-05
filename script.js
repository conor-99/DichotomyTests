/* Common functions */

function getParameter(param) {

    var url = location.href;
    param = "[\\?&]" + param + "=([^&#]*)";

    var regex = new RegExp(param);
    var results = regex.exec(url);

    return results[1];

}

function getParameterInt(param) { return parseInt(getParameter(param)); }

function getTest(id) {

	for (var i = 0; i < tests.length; i++) {
		if (tests[i].id == id) return tests[i];
	}

	return null;

}

/* index.html */

function buildComingSoon() {

	// Containers
	var col = document.createElement("div");
	col.classList.add("col-sm-6");

	var card = document.createElement("div");
	card.classList.add("card", "mt-10");

	var cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	// Test title
	var title = document.createElement("h5");
	title.classList.add("text-center", "font-weight-normal");
	title.innerText = "More Tests";

	// Test description
	var desc = document.createElement("p");
	desc.classList.add("text-left", "small");
	desc.innerText = "Take some of our psychological tests at PsychTests!";

	var button = document.createElement("button");
	button.classList.add("btn", "btn-outline-success", "btn-block", "sizing");
	button.innerText = "Psych Tests";
	button.setAttribute("type", "button");

	var link = "window.open('http://psychtests.co.nf', '_blank');";
	button.setAttribute("onclick", link);

	// Putting everything together
	cardBody.appendChild(title);
	cardBody.appendChild(desc);
	cardBody.appendChild(button);
	card.appendChild(cardBody);
	col.appendChild(card);

	return col;

}

function buildCol(test) {

	// Calculations
	var questions = test.questions.length;
	var minutes = Math.ceil(questions / ANSWERS_PER_MINUTE);

	// Containers
	var col = document.createElement("div");
	col.classList.add("col-sm-6");

	var card = document.createElement("div");
	card.classList.add("card", "mt-10");

	var cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	// Test title
	var title = document.createElement("h5");
	title.classList.add("text-center", "font-weight-normal");
	title.innerText = test.name;

	// Test subtitle
	var sub = document.createElement("h6");
	sub.classList.add("text-left", "text-muted", "small", "font-italic");
	sub.innerText = questions + " questions, " + minutes + " minutes";

	// Test description
	var desc = document.createElement("p");
	desc.classList.add("text-left", "small");
	desc.innerText = test.description;

	// Test button
	var button = document.createElement("button");
	button.classList.add("btn", "btn-outline-secondary", "btn-block", "sizing", test.btnClass);
	button.innerText = "Start the test";
	button.setAttribute("type", "button");

	var link = "location.href='./test.html?id=" + test.id + "';";
	button.setAttribute("onclick", link);

	// Putting everything together
	cardBody.appendChild(title);
	cardBody.appendChild(sub);
	cardBody.appendChild(desc);
	cardBody.appendChild(button);
	card.appendChild(cardBody);
	col.appendChild(card);

	return col;

}

function buildRow() {

	var row = document.createElement("div");
	row.classList.add("row", "tests-row");

	return row;

}

function displayTests() {

	var cols = tests.length;
	var testsContainer = document.getElementById("tests-list");

	for (var i = 0; i < tests.length; i += 2) {
	    
	    var row = buildRow();
		var col1, col2;

		col1 = buildCol(tests[i]);
		col2 = (cols == 1) ? null : buildCol(tests[i + 1]);
		
		row.appendChild(col1);
		if (col2 != null) row.appendChild(col2);
		if (col2 == null) row.appendChild(buildComingSoon());
		testsContainer.appendChild(row);

		cols -= 2;

	} 

}

/* test.html */

function startTest() {

	document.getElementById("container-preamble").classList.add("hidden");
	document.getElementById("container-test").classList.remove("hidden");
	
	if (mode == AGREE) {
		document.getElementById("ct-agree").classList.remove("hidden");
		initAgree();
	} else {
		document.getElementById("ct-scenario").classList.remove("hidden");
		initScenario();
	}

}

function initAgree() {

	document.getElementById("qn-num").innerText = "Question " + (questionNumber + 1) + " of " + (test.questions.length);
	document.getElementById("in").innerText = test.instruction;
	document.getElementById("qn").innerText = test.questions[questionNumber].text;
	document.getElementById("qn-bar").style.width = (100 * (questionNumber / test.questions.length)).toString() + "%";

	if (previousAnswer == null) {
		document.getElementById("prev-button").style.display = "none";
		document.getElementById("prev-button-off").style.display = "block";
	} else {
		document.getElementById("prev-button").style.display = "block";
		document.getElementById("prev-button-off").style.display = "none";
	}

}

function initScenario() { } // to-do

function nextAgree(val) {

	var question = test.questions[questionNumber];

	for (var i = 0; i < scores.length; i++) {
		scores[i] += (val * question.effects[i]);
	}

	previousAnswer = val;
	questionNumber++;

	if (questionNumber < test.questions.length) initAgree();
	else goToResults();

}

function nextScenario(val) { } // to-do

function prev() {
	if (mode == AGREE) prevAgree();
	else prevScenario();
}

function prevAgree() {

	if (previousAnswer == null) return;

	var question = test.questions[questionNumber - 1];

	for (var i = 0; i < scores.length; i++) {
		scores[i] -= (previousAnswer * question.effects[i]);
	}

	questionNumber--;
	previousAnswer = null;

	initAgree();

}

function prevScenario() { } // to-do

function goToResults() {

	var resultsString = "results.html?id=" + id;

	for (var i = 0; i < scores.length; i++) {
		resultsString += ("&" + test.scales[i].param + "=" + scores[i]);
	}

	location.href = (resultsString);

}

/* results.html */

function getResults() {

	var scores = [];
	var maxScores = new Array(test.scales.length).fill(0);
	var percentages = [];

	// load scores from url
	for (var i = 0; i < test.scales.length; i++) {
		scores[i] = getParameterInt(test.scales[i].param);
	}
	
	// calculate max scores from questions list
	for (var i = 0; i < test.questions.length; i++) {
		for (var j = 0; j < test.scales.length; j++) {
			maxScores[j] += Math.abs(test.questions[i].effects[j]);
		}
	}

	// calculate %s
	for (var i = 0; i < maxScores.length; i++) {
		percentages[i] = ((scores[i] + maxScores[i]) / (2 * maxScores[i]));
	}

	return percentages;

}

function buildResults(results) {
	if (test.resultsType == BARS) buildResultsBars(results);
	else builResultsCompass(results);
}

function buildResultsBars(results) {

	var container = document.getElementById("container-results");
	container.style.height = (86 * test.scales.length) + "px";

	for (var i = 0; i < test.scales.length; i++) {
		axis = buildBar(test.scales[i], results[i]);
		container.appendChild(axis);
	}

}

function buildBar(scale, result) {

	if (result < 0) result = 0;
	if (result > 1) result = 1;

	var axis = document.createElement("div");
	axis.classList.add("axis");

	var label = document.createElement("div");
	label.classList.add("label");
	
	var labelLeft = document.createElement("span");
	labelLeft.innerText = scale.a.text + " ";
	
	var labelMid = document.createElement("span");
	labelMid.classList.add("label-vs");
	labelMid.innerText = "vs";
	
	var labelRight = document.createElement("span");
	labelRight.innerText = " " + scale.b.text;

	var iconLeft = document.createElement("div");
	iconLeft.classList.add("icon", "icon-left");

	var imgLeft = document.createElement("img");
	imgLeft.classList.add("img");
	imgLeft.src = scale.a.path;
	imgLeft.style.backgroundColor = scale.a.color;

	var iconRight = document.createElement("div");
	iconRight.classList.add("icon", "icon-right");

	var imgRight = document.createElement("img");
	imgRight.classList.add("img");
	imgRight.src = scale.b.path;
	imgRight.style.backgroundColor = scale.b.color;

	var percentLeft = document.createElement("div");
	percentLeft.classList.add("label-percent", "label-percent-left");
	percentLeft.innerText = (result > 0.1) ? (result * 100).toFixed(1) + "%" : "";

	var percentRight = document.createElement("div");
	percentRight.classList.add("label-percent", "label-percent-right");
	percentRight.innerText = (result < 0.9) ? ((1 - result) * 100).toFixed(1) + "%" : "";

	var bar = document.createElement("img");
	bar.classList.add("bar");
	bar.src = "images/bar.png";

	var fillLeft = document.createElement("img");
	fillLeft.classList.add("fill", "fill-l");
	fillLeft.src = "images/fill.png";
	fillLeft.style.width = "calc((70% - 26px) * " + result + ")";
	fillLeft.style.backgroundColor = scale.a.color;

	var fillMid = document.createElement("img");
	fillMid.classList.add("fill", "fill-m");
	fillMid.src = "images/fill.png";
	fillMid.style.width = "calc(((70% - 26px) * " + result + ") + 0.8px)";

	var fillRight = document.createElement("img");
	fillRight.classList.add("fill", "fill-r");
	fillRight.src = "images/fill.png";
	fillRight.style.backgroundColor = scale.b.color;

	label.appendChild(labelLeft);
	label.appendChild(labelMid);
	label.appendChild(labelRight);
	iconLeft.appendChild(imgLeft);
	iconRight.appendChild(imgRight);

	axis.appendChild(label);
	axis.appendChild(iconLeft);
	axis.appendChild(iconRight);
	axis.appendChild(percentLeft);
	axis.appendChild(percentRight);
	axis.appendChild(bar);
	axis.appendChild(fillLeft);
	axis.appendChild(fillMid);
	axis.appendChild(fillRight);

	return axis;

}

function buildResultsCompass(results) { } // to-do

function buildMarkers(results) {

	var container = document.getElementById("container-results");
	
	var markerContainer = document.createElement("div");
	markerContainer.classList.add("d-flex", "justify-content-center");

	var hasMarkers = false;

	for (var i = 0; i < test.markers.length; i++) {

		var marker = test.markers[i];

		var s1 = marker.scales[0];
		var s2 = marker.scales[1];

		var hasFirst = (s1.bar == 0 && results[s1.scale] > s1.min) || (s1.bar == 1 && (1 - results[s1.scale]) > s1.min);
		var hasSecond = (s2.bar == 0 && results[s2.scale] > s2.min) || (s2.bar == 1 && (1 - results[s2.scale]) > s2.min);

		if (hasFirst && hasSecond) {

			var markerImg = document.createElement("img");
			markerImg.classList.add("marker-img");
			markerImg.src = marker.path;
			markerImg.alt = marker.name;
			markerImg.setAttribute("data-toggle", "tooltip");
			markerImg.title = marker.name;

			markerContainer.appendChild(markerImg);
			hasMarkers = true;

		}

	}

	if (hasMarkers) {
		container.style.height = (container.offsetHeight + 60) + "px";
		container.appendChild(markerContainer);
	}

}

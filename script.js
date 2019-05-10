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

function buildPsychTests() {

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
	button.classList.add("btn", "btn-outline-secondary", "btn-block", "sizing", "btn-53a548");
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
	desc.innerHTML = test.description;

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

	var even = (cols % 2 == 0);

	for (var i = 0; i < tests.length; i += 2) {
	    
	    var row = buildRow();
		var col1, col2;

		col1 = buildCol(tests[i]);
		col2 = (cols == 1) ? null : buildCol(tests[i + 1]);
		
		row.appendChild(col1);
		if (col2 != null) row.appendChild(col2);
		if (!even && col2 == null) row.appendChild(buildPsychTests());
		testsContainer.appendChild(row);

		cols -= 2;

	} 

	if (even) {
		var row = buildRow();
		row.appendChild(buildPsychTests());
		testsContainer.appendChild(row);
	}

}

/* test.html */

function startTest() {

	document.getElementById("container-preamble").classList.add("hidden");
	document.getElementById("container-test").classList.remove("hidden");
	
	if (mode == AGREE) {
		document.getElementById("ct-agree").classList.remove("hidden");
		initAgree();
	} else if (mode == SCENARIO) {
		document.getElementById("ct-scenario").classList.remove("hidden");
		initScenario();
	}
	else {
		document.getElementById("ct-images").classList.remove("hidden");
		initImages();
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

function initImages() {

	document.getElementById("qn-num").innerText = "Question " + (questionNumber + 1) + " of " + (test.questions.length);
	document.getElementById("in").innerText = test.instruction;
	document.getElementById("qn").style.display = "none";
	document.getElementById("qn-bar").style.width = (100 * (questionNumber / test.questions.length)).toString() + "%";

	document.getElementById("img-left").src = test.questions[questionNumber].imageA;
	document.getElementById("img-right").src = test.questions[questionNumber].imageB;

	if (previousAnswer == null) {
		document.getElementById("prev-button").style.display = "none";
		document.getElementById("prev-button-off").style.display = "block";
	} else {
		document.getElementById("prev-button").style.display = "block";
		document.getElementById("prev-button-off").style.display = "none";
	}

}

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

function nextImages(val) {

	var question = test.questions[questionNumber];

	for (var i = 0; i < scores.length; i++) {
		scores[i] += (val * question.effects[i]);
	}

	previousAnswer = val;
	questionNumber++;

	if (questionNumber < test.questions.length) initImages();
	else goToResults();
	
}

function prev() {
	if (mode == AGREE) prevAgree();
	else if (mode == IMAGES) prevScenario();
	else prevImages();
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

function prevImages() {
	
	if (previousAnswer == null) return;
	
	var question = test.questions[questionNumber - 1];
	
	for (var i = 0; i < scores.length; i++) {
		scores[i] -= (previousAnswer * question.effects[i]);
	}
	
	questionNumber--;
	previousAnswer = null;
	
	initImages();
	
}

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
	else buildResultsCompass(results);
	buildResultsExplain();
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

function buildResultsCompass(results) {

	var container = document.getElementById("container-results");	
	container.style.height = (container.offsetWidth * 0.98) + 135 + "px";
	
	var canvas = document.createElement("canvas");
	canvas.id = "compass";
	canvas.width = container.offsetWidth * 0.98;
	canvas.height = container.offsetWidth * 0.98;
	canvas.style.marginTop = (container.offsetWidth * 0.01) + "px";
	canvas.style.marginLeft = (container.offsetWidth * 0.01) + "px";
	container.appendChild(canvas);

	var offset = canvas.width * 0.08;
	var edgeLen = canvas.width * 0.84;
	var middle = offset + (edgeLen * 0.5);
	
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = test.scales[0].a.color;
	ctx.fillRect(offset, offset, middle, middle);
	ctx.fillStyle = test.scales[0].b.color;
	ctx.fillRect(middle, middle, (edgeLen * 0.5), (edgeLen * 0.5));
	ctx.fillStyle = test.scales[1].a.color;
	ctx.fillRect(middle, offset, (edgeLen * 0.5), (edgeLen * 0.5));
	ctx.fillStyle = test.scales[1].b.color;
	ctx.fillRect(offset, middle, (edgeLen * 0.5), (edgeLen * 0.5));

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#AAAAAA";

	ctx.strokeRect(offset, offset, edgeLen, edgeLen);

	var x;

	for (var i = 0; i < 9; i++) {

		x = offset + (edgeLen * ((i + 1) / 20));

		ctx.beginPath();
		ctx.moveTo(x, offset);
		ctx.lineTo(x, (offset + edgeLen));
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(offset, x);
		ctx.lineTo((offset + edgeLen), x);
		ctx.stroke();

		x = offset + (edgeLen * ((i + 11) / 20));

		ctx.beginPath();
		ctx.moveTo(x, offset);
		ctx.lineTo(x, (offset + edgeLen));
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(offset, x);
		ctx.lineTo((offset + edgeLen), x);
		ctx.stroke();

	}
	
	ctx.strokeStyle = "#767676";

	ctx.beginPath();
	ctx.moveTo(middle, offset);
	ctx.lineTo(middle, (offset + edgeLen));
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(offset, middle);
	ctx.lineTo((offset + edgeLen), middle);
	ctx.stroke();

	sh = offset + (results[0] * edgeLen);
	sv = offset + ((1 - results[1]) * edgeLen);

	ctx.fillStyle = "#BA3B46";
	ctx.strokeStyle = "#444444";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(sh, sv, (edgeLen * 0.02), 0, (Math.PI * 2));
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "#333333";
	ctx.font = "16px Sans-Serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	ctx.save();
	ctx.translate((offset * 0.6), middle);
	ctx.rotate(Math.PI * -0.5);
	ctx.fillText(test.scales[0].a.text, 0, 0);
	ctx.restore();

	ctx.save();
	ctx.translate((edgeLen + (offset * 1.4)), middle);
	ctx.rotate(Math.PI * 0.5);
	ctx.fillText(test.scales[0].b.text, 0, 0);
 	ctx.restore();

	ctx.fillText(test.scales[1].a.text, middle, (offset * 0.6));
	ctx.fillText(test.scales[1].b.text, middle, (edgeLen + (offset * 1.5)));

	var t0 = "<b>" + test.scales[0].axisName + "</b>: <br><i>" + test.scales[0].a.text + " </i>vs<i> " + test.scales[0].b.text + "</i>: " + ((results[0] - 0.5) * 20).toFixed(1);
	var t1 = "<b>" + test.scales[1].axisName + "</b>: <br><i>" + test.scales[1].a.text + " </i>vs<i> " + test.scales[1].b.text + "</i>: " + ((results[1] - 0.5) * 20).toFixed(1);

	var desc = document.createElement("p");
	desc.style.marginTop = "-5px";
	desc.style.marginLeft = (container.offsetWidth * 0.08) + 6 + "px";
	desc.style.fontSize = "18px";
	desc.innerHTML = t0 + "<br>" + t1;
	container.appendChild(desc);
	
}

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

function buildResultsExplain() {

	// Skip the meme test
	if (id == 4) {
		var box = document.getElementById("container-explain")
		box.parentNode.removeChild(box);
		return;
	}

	var container = document.getElementById("explain");

	for (var i = 0; i < test.scales.length; i++) {
		explain = buildExplain(test.scales[i]);
		container.appendChild(explain);
	}

}

function buildExplain(scale) {

	var br1 = document.createElement("br");
	var br2 = document.createElement("br");

	var explain = document.createElement("div");
	explain.classList.add("explain-axis");

	var title = document.createElement("span");
	title.style.fontWeight = "bold";
	title.innerText = scale.axisName + ": ";

	var titleDesc = document.createElement("span");
	titleDesc.innerText = scale.axisDesc;

	explain.appendChild(title);
	explain.appendChild(titleDesc);
	explain.appendChild(br1);

	var content = document.createElement("span");
	content.classList.add("explain-content");

	var subTitle1 = document.createElement("span");
	subTitle1.style.fontStyle = "italic";
	subTitle1.innerText = scale.a.text + ": ";
	
	var subDesc1 = document.createElement("span");
	subDesc1.innerText = scale.a.desc;

	var subTitle2 = document.createElement("span");
	subTitle2.style.fontStyle = "italic";
	subTitle2.innerText = scale.b.text + ": ";

	var subDesc2 = document.createElement("span");
	subDesc2.innerText = scale.b.desc;

	content.appendChild(subTitle1);
	content.appendChild(subDesc1);
	content.appendChild(br2);
	content.appendChild(subTitle2);
	content.appendChild(subDesc2);

	explain.appendChild(content);
	return explain;

}

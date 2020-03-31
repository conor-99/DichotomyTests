// Returns the value of a given GET parameter
function getParameter(param) {

    var url = location.href;
    param = "[\\?&]" + param + "=([^&#]*)";

    var regex = new RegExp(param);
    var results = regex.exec(url);

    return results[1];

}

// Returns the value of a given GET parameter as an integer
function getParameterInt(param) { return parseInt(getParameter(param)); }

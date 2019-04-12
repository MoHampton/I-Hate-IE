/*Includes Function*/
//Note: IndexOf will not work in browers older than IE11
function includes(container, value) {
	var returnValue = false;
	var pos = container.indexOf(value);
	if (pos >= 0) {
		returnValue = true;
	}
	return returnValue;
}

/*Does Not Include Function*/
function doesNotInclude(container, value) {
	var returnValue = false;
	var pos = container.indexOf(value);
	if (pos < 0) {
		returnValue = true;
	}
	return returnValue;
}

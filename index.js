
var s_node_js_utils = require('s_node_js_utils')

exports.formatIndianRupee = function(rupee) {
	if (s_node_js_utils.isEmptyString(rupee)) {
		return ""
	}

	rupee = s_node_js_utils.extractNumberFromString(rupee)

	var splitDecimalArray = rupee.split(".")

	var rupeeRound = splitDecimalArray[0]


	console.log(rupeeRound)

	var processedFormat = ""


	if (rupeeRound.length <= 3) {
		processedFormat = rupeeRound
	} else {

		
		processedFormat = rupeeRound.substring(rupeeRound.length - 3, rupeeRound.length);
		var addComma = true
		for (var i = rupeeRound.length - 4; i >= 0; i--) {
			if (addComma) {
				processedFormat = rupeeRound.charAt(i) + "," + processedFormat
				addComma = false
			} else {
				processedFormat = rupeeRound.charAt(i) + processedFormat
				addComma = true
			}
		}
	}

	if (splitDecimalArray.length >= 2) {
		return processedFormat + "." + splitDecimalArray[1]
	}

	return processedFormat
}




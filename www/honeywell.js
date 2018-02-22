var exec = require('cordova/exec');

var honeywell = {
    listenForScans: function(success, failure) {
        return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
    }
	
	unregister: function(success, failure) {
        return exec(success, failure, "HoneywellScannerPlugin", "unregister", []);
    }
};

module.exports = honeywell;
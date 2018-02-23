var exec = require('cordova/exec');

var honeywell = {
    listenForScans: function (success, failure)
    {
        return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
    },

    claim: function ()
    {
        return exec(null, null, "HoneywellScannerPlugin", "claim", []);
    },

    release: function ()
    {
        return exec(null, null, "HoneywellScannerPlugin", "release", []);
    }
};

module.exports = honeywell;
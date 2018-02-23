var exec = require('cordova/exec');

var honeywell = {
    listenForScans: function (success, failure)
    {
        return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
    },

    unregister: function ()
    {
        return exec(null, null, "HoneywellScannerPlugin", "unregister", []);
    },

    release: function ()
    {
        return exec(null, null, "HoneywellScannerPlugin", "release", []);
    }
};

module.exports = honeywell;
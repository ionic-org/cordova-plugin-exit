var exec = require('cordova/exec');

function Echo() {

};

Echo.prototype.echo = function (successCallback,errorCallback,param1,param2) {
    exec(successCallback,errorCallback,'Echo','echo',[param1,param2]);
}

module.export = new Echo();
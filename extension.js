const vscode = require('vscode');
const george = require('./george.js');
const launch = require('./.vscode/launch.json');

function activate(context) {
    
    let disposable = vscode.commands.registerCommand('extension.george', function () {
        var x = vscode.window.activeTextEditor.document.getText()
        george(x, callback => {
            vscode.window.showInformationMessage(callback);
        })
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
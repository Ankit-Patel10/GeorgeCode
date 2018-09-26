const vscode = require('vscode');
const george = require('./george.js');

function activate(context) {
    this._channel = vscode.window.createOutputChannel("george");
    let disposable = vscode.commands.registerCommand('extension.george', function () {
        var x = vscode.window.activeTextEditor.document.getText()
        george(x, callback => {
            this._channel.clear();
            this._channel.appendLine(callback);
        })
    });

    context.subscriptions.push(this._channel);
    context.subscriptions.push(disposable);
    
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
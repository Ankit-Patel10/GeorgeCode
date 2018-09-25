const vscode = require('vscode');
const george = require('./george.js');

function activate(context) {
    this._channel = vscode.window.createOutputChannel("george");
    let disposable = vscode.commands.registerCommand('extension.george', ()  => {
        var x = vscode.window.activeTextEditor.document.getText();
        if(x === undefined) return;
        george(x, callback => {
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
import * as vscode from 'vscode'; 

export function activate(context: vscode.ExtensionContext) {
    // Push up message with text
    vscode.window.showInformationMessage('Extension "ZeroSyntax-Highlight" is now active!');
}
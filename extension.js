"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode = require("vscode");
function activate(context) {
    // Push up message with text
    vscode.window.showInformationMessage('Extension "ZeroSyntax-Highlight" is now active!');
}
exports.activate = activate;

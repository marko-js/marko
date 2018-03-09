"use strict";

let CodeWriter = require("./CodeWriter");

function fixIndentation(lines) {
    let length = lines.length;
    let startLine = 0;
    let endLine = length;

    for (; startLine < length; startLine++) {
        let line = lines[startLine];
        if (line.trim() !== "") {
            break;
        }
    }

    for (; endLine > startLine; endLine--) {
        let line = lines[endLine - 1];
        if (line.trim() !== "") {
            break;
        }
    }

    if (endLine === startLine) {
        return "";
    }

    if (startLine !== 0 || endLine !== length) {
        lines = lines.slice(startLine, endLine);
    }

    let firstLine = lines[0];
    let indentToRemove = /^\s*/.exec(firstLine)[0];

    if (indentToRemove) {
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.startsWith(indentToRemove)) {
                lines[i] = line.substring(indentToRemove.length);
            }
        }
    }

    return lines.join("\n");
}

function normalizeTemplateSrc(src) {
    let lines = src.split(/\r\n|\n\r|\n/);
    if (lines.length) {
        if (lines[0].trim() === "") {
            return fixIndentation(lines);
        }
    }

    return src.trim();
}
class InlineCompiler {
    constructor(context, compiler) {
        this.context = context;
        this.compiler = compiler;
        this.builder = context.builder;

        context.setInline(true);
    }

    compile(src) {
        src = normalizeTemplateSrc(src);
        // console.log('TEMPLATE SRC:>\n' + src + '\n<');
        return this.compiler.compile(src, this.context);
    }

    get staticCode() {
        let staticNodes = this.context.getStaticNodes();

        if (!staticNodes || staticNodes.length === 0) {
            return null;
        }

        let codeWriter = new CodeWriter(this.context.options, this.builder);
        codeWriter.write(staticNodes);
        return codeWriter.getCode();
    }
}

module.exports = InlineCompiler;

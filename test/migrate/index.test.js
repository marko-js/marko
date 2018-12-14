"use strict";

if (!/^v6\..*/.test(process.version)) {
    require("../__util__/test-init");

    var path = require("path");
    var chai = require("chai");
    chai.config.includeStack = true;
    var cp = require("child_process");
    var autotest = require("../autotest");
    var migrate = require("@marko/migrate").default;
    var CWD = process.cwd();

    cp.execSync("npm i --no-package-lock", { cwd: __dirname });

    autotest("fixtures", fixture => {
        let test = fixture.test;
        let resolve = fixture.resolve;
        let snapshot = fixture.snapshot;
        let expectedPrompts = [];

        try {
            expectedPrompts = require(resolve("./prompts.js")).slice();
        } catch (_) {
            // Ignore
        }

        test(() => {
            return migrate({
                dir: __dirname,
                files: [resolve("template.marko")],
                prompt(opts) {
                    if (!expectedPrompts.length) {
                        throw new Error(
                            "Prompt occurred during migration test but no answer provided."
                        );
                    }

                    const currentPrompt = expectedPrompts.shift();
                    chai.expect(opts.message).to.eql(currentPrompt.question);
                    return currentPrompt.answer;
                }
            }).then(outputs => {
                const byExtension = Object.entries(outputs)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .reduce((r, [file, source]) => {
                        const ext = path.extname(file);
                        const parts = (r[ext] = r[ext] || []);
                        parts.push(
                            `${toComment(
                                ext,
                                path.relative(CWD, file)
                            )}\n\n${source}`
                        );
                        return r;
                    }, {});

                Object.entries(byExtension).forEach(([ext, files]) => {
                    snapshot(files.join("\n\n"), {
                        ext,
                        name: "snapshot"
                    });
                });
            });
        });
    });
}

function toComment(ext, str) {
    switch (ext) {
        case ".marko":
            return `<!-- ${str} -->`;
        case ".js":
        case ".json":
            return `// ${str}`;
        default:
            return `# ${str}`;
    }
}

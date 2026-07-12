"use strict";

// Regression test for https://github.com/marko-js/marko/issues/3386.
//
// Under hot reload the lazy `with { load }` facade was created through the HMR
// `createTemplate`, which caches by type id. The facade therefore shared the
// real component's cached template object and `_` accessor, and rendering it
// recursed between the HMR `proxyRenderer` and the facade's `loadRenderer`
// until the stack overflowed. Dev already loads every module eagerly, so hot
// mode now compiles `with { load }` imports as normal eager tag imports and
// never emits the facade.

var path = require("path");
var compiler = require("@marko/compiler");

var templatePath = path.join(__dirname, "template.marko");
var linkAssets = { runtime: "marko/dist/vite/runtime.js", onAsset: function () {} };

function compile(output, hot) {
  // The compiler caches analysis per file within a process; clear it so each
  // option set recompiles from scratch.
  compiler._clearDefaults();
  return compiler.compileFileSync(templatePath, {
    output: output,
    hot: hot,
    linkAssets: linkAssets,
    writeVersionComment: false,
  }).code;
}

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  try {
    // Dev (hot): no lazy facade, no dynamic import, `load` attribute stripped.
    ["dom", "html"].forEach(function (output) {
      var code = compile(output, true);
      expect(code, output + " hot output").to.not.match(
        /load-tag-browser|withLoadAssets|import\(/,
      );
      expect(code, output + " hot output").to.not.contain("with { load");
    });

    // Production (non-hot): lazy loading is unchanged.
    expect(compile("dom", false), "dom production output").to.contain(
      "load-tag-browser",
    );
    expect(compile("html", false), "html production output").to.contain(
      "withLoadAssets",
    );

    done();
  } catch (err) {
    done(err);
  }
};

"use strict";

// Regression test for https://github.com/marko-js/marko/issues/3386, plus the
// `linkAssets`-less fallback.
//
// Under hot reload the lazy `with { load }` facade was created through the HMR
// `createTemplate`, which caches by type id. The facade therefore shared the
// real component's cached template object and `_` accessor, and rendering it
// recursed between the HMR `proxyRenderer` and the facade's `loadRenderer`
// until the stack overflowed. Dev already loads every module eagerly, so hot
// mode now compiles `with { load }` imports as normal eager tag imports and
// never emits the facade. The same eager fallback applies without `linkAssets`,
// where there is no asset orchestration to drive lazy loading at all.

var path = require("path");
var compiler = require("@marko/compiler");

var templatePath = path.join(__dirname, "template.marko");
var linkAssets = { runtime: "marko/dist/vite/runtime.js", onAsset: function () {} };

function compile(output, hot, link) {
  // The compiler caches analysis per file within a process; clear it so each
  // option set recompiles from scratch.
  compiler._clearDefaults();
  var opts = {
    output: output,
    hot: hot,
    writeVersionComment: false,
  };
  if (link !== false) opts.linkAssets = linkAssets;
  return compiler.compileFileSync(templatePath, opts).code;
}

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  try {
    // Dev (hot) and the unlinked build both drop the facade: no lazy runtime,
    // no dynamic import, `load` attribute stripped.
    [
      ["hot", true, true],
      ["unlinked", false, false],
    ].forEach(function (scenario) {
      var label = scenario[0];
      ["dom", "html"].forEach(function (output) {
        var code = compile(output, scenario[1], scenario[2]);
        expect(code, output + " " + label + " output").to.not.match(
          /load-tag-browser|withLoadAssets|import\(/,
        );
        expect(code, output + " " + label + " output").to.not.contain(
          "with { load",
        );
      });
    });

    // Production (non-hot, linked): lazy loading is unchanged.
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

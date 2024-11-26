// size: 196 (min) 119 (brotli)
_$.register("a1", function () {
  log.static += "rendered";
}),
  _$.register(
    "a0",
    (_scope) =>
      function () {
        log.const += "rendered";
      },
  );
const _logOutput = _$.state(3, (_scope, logOutput) =>
  _$.data(_scope[0], logOutput),
);
_$.effect("a2", (_scope) => _logOutput(_scope, JSON.stringify(log))), init();

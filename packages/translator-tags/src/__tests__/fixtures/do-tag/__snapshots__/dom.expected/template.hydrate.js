// size: 193 (min) 115 (brotli)
_$.register("c", function () {
  log.static += "rendered";
}),
  _$.register(
    "b",
    (_scope) =>
      function () {
        log.const += "rendered";
      },
  );
const _logOutput = _$.state(3, (_scope, logOutput) =>
  _$.data(_scope[0], logOutput),
);
_$.effect("d", (_scope) => _logOutput(_scope, JSON.stringify(log))), init();

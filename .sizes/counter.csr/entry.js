// size: 222 (min) 159 (brotli)
const _clickCount_effect = effect("XBSGKvBc", (_scope) =>
    on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: clickCount } = _scope;
        return function () {
          _clickCount(_scope, clickCount + 1);
        };
      })(_scope),
    ),
  ),
  _clickCount = state(2, (_scope, clickCount) => {
    data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
function _setup_(_scope) {
  _clickCount(_scope, 0);
}
createTemplate(
  "tPaZsVqd",
  "<div><button> </button></div>",
  "D D m",
  _setup_,
).mount();

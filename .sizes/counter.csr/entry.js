// size: 190 (min) 153 (brotli)
const _clickCount_effect = effect("a0", (_scope, { 2: clickCount }) =>
    on(_scope[0], "click", function () {
      _clickCount(_scope, clickCount + 1);
    }),
  ),
  _clickCount = state(2, (_scope, clickCount) => {
    data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
function _setup(_scope) {
  _clickCount(_scope, 0);
}
createTemplate("a", "<div><button> </button></div>", "D D m", _setup).mount();

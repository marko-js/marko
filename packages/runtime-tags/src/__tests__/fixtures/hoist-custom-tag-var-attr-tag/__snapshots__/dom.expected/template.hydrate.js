// size: 348 (min) 209 (brotli)
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
_$.register("a0", $_return), _$.register("c1", _$.hoist(2, "a1"));
const $setHtml$what$content = _$.registerBoundSignal("c2", _$.value(2));
_$.registerContent(
  "c0",
  "<div></div>",
  "0 b&",
  ($scope) => {
    _$.setTagVar($scope, 0, $setHtml$what$content),
      (function ($scope) {
        _$.tagVarSignal($scope, $_return($scope));
      })($scope[0]);
  },
  0,
  0,
  "a1",
),
  _$.effect("c3", ({ 1: $hoisted_setHtml }) => {
    for (const fn of 1) fn("Hoist from custom tag");
  }),
  init();

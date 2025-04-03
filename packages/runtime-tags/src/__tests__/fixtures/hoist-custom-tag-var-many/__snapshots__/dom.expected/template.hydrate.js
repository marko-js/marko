// size: 413 (min) 196 (brotli)
_$.register("a0", function ($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}),
  _$.register("b0", _$.hoist(20, "m0", "m2")),
  _$.registerBoundSignal("b1", _$.value(20));
const $get$hoisted_setHtml2 = _$.hoist(10, "m1");
_$.registerBoundSignal("b2", _$.value(10));
const $get$hoisted_setHtml3 = _$.hoist(4, "m0");
_$.registerBoundSignal("b3", _$.value(4)),
  _$.effect("b4", ({ 4: $hoisted_setHtml3 }) => {
    {
      let i = 0;
      for (const fn of 4) fn(`All (${i++})`);
    }
  }),
  _$.effect("b5", ($scope) => {
    $get$hoisted_setHtml3($scope)("First Only"),
      $get$hoisted_setHtml2($scope)("First Only");
  }),
  init();

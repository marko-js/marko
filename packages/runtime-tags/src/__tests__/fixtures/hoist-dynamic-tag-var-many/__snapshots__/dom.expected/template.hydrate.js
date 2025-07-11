// size: 403 (min) 207 (brotli)
(_$.register("a0", function ($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}),
  _$.register("b0", _$.hoist(2, "m0", "m2")),
  _$.registerBoundSignal("b1", _$.value(2)));
const $get$hoisted_setHtml2 = _$.hoist(2, "m1");
_$.registerBoundSignal("b2", _$.value(2));
const $get$hoisted_setHtml3 = _$.hoist(2, "m0");
(_$.registerBoundSignal("b3", _$.value(2)),
  _$.effect("b4", ({ 4: $hoisted_setHtml3 }) => {
    {
      let i = 0;
      for (const fn of 4) fn(`All (${i++})`);
    }
  }),
  _$.effect("b5", ($scope) => {
    ($get$hoisted_setHtml3($scope)("First Only"),
      $get$hoisted_setHtml2($scope)("First Only"));
  }),
  init());

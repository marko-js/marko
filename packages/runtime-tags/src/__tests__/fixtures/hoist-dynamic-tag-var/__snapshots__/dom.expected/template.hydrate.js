// size: 416 (min) 198 (brotli)
_$.register("a0", function ($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}),
  _$.effect("b0", ({ 2: input_value }) => input_value),
  _$.effect("c0", ($scope) => $get$hoisted_setHtml($scope._)("Hello world"));
const $get$hoisted_setHtml = _$.hoist(2, "d3");
_$.registerBoundSignal("c1", _$.value(2));
const $get$hoisted_setHtml2 = _$.hoist(2, "d2");
_$.registerBoundSignal("c2", _$.value(2));
const $get$hoisted_setHtml3 = _$.register("c3", _$.hoist(2, "d0", "d0"));
_$.registerBoundSignal("c4", _$.value(2)),
  _$.effect("c5", ($scope) => {
    $get$hoisted_setHtml3($scope)("Hello world"),
      $get$hoisted_setHtml2($scope)("Hello world");
  }),
  init();

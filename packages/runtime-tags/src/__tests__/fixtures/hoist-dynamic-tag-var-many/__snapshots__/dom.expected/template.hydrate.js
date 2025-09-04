// size: 385 (min) 187 (brotli)
(_._resume("a0", function ($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}),
  _._resume("b0", _._hoist(2, "m0", "m2")),
  _._var_resume("b1", _._const(2)));
const $get$hoisted_setHtml2 = _._hoist(2, "m1");
_._var_resume("b2", _._const(2));
const $get$hoisted_setHtml3 = _._hoist(2, "m0");
(_._var_resume("b3", _._const(2)),
  _._script("b4", ({ 4: $hoisted_setHtml3 }) => {
    {
      let i = 0;
      for (const fn of 4) fn(`All (${i++})`);
    }
  }),
  _._script("b5", ($scope) => {
    ($get$hoisted_setHtml3($scope)("First Only"),
      $get$hoisted_setHtml2($scope)("First Only"));
  }),
  init());

// size: 361 (min) 188 (brotli)
_._resume("a0", function ($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
});
const $setHtml3_getter = _._hoist_resume("b0", 2, "Aa", "Ac");
_._var_resume("b1", _._const(2));
const $setHtml2_getter = _._hoist(2, "Ab");
_._var_resume("b2", _._const(2));
const $setHtml_getter = _._hoist(2, "Aa");
(_._var_resume("b3", _._const(2)),
  _._script("b4", ($scope) => {
    ($setHtml_getter($scope)()("First Only"),
      $setHtml2_getter($scope)()("First Only"));
    {
      let i = 0;
      for (const fn of $setHtml3_getter($scope)) fn(`All (${i++})`);
    }
  }),
  init());

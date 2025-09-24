// size: 206 (min) 138 (brotli)
(_._resume("a0", function ($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}),
  _._resume("c0", _._hoist(2, "a1")),
  _._var_resume("c1", _._const(2)),
  _._script("c3", ({ 1: $hoisted_setHtml }) => {
    for (const fn of $hoisted_setHtml) fn("Hoist from custom tag");
  }),
  init());

// size: 325 (min) 202 (brotli)
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
(_._resume("a0", $_return), _._resume("c1", _._hoist(2, "a1")));
const $what_content__setHtml = _._var_resume("c2", _._const(2));
(_._content_resume(
  "c0",
  "<div></div>",
  "0 b&",
  ($scope) => {
    (_._var($scope, 0, $what_content__setHtml),
      (function ($scope) {
        _._return($scope, $_return($scope));
      })($scope[0]));
  },
  0,
  "a1",
),
  _._script("c3", ({ 1: $hoisted_setHtml }) => {
    for (const fn of $hoisted_setHtml) fn("Hoist from custom tag");
  }),
  init());

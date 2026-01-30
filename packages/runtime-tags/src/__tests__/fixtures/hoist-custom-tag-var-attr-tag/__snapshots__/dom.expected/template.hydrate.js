// size: 199 (min) 158 (brotli)
_._resume("a0", function ($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
});
const $setHtml_getter = _._hoist_resume("c0", 2, "B1");
(_._var_resume("c1", _._const(2)),
  _._script("c3", ($scope) => {
    for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
  }),
  init());

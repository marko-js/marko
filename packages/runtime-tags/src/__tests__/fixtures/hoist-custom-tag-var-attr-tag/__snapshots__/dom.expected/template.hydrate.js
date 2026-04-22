// size: 200 (min) 152 (brotli)
function $_return($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
}
_._resume(`a0`, $_return);
const $setHtml_getter = _._hoist_resume(`c0`, 2, `B1`);
(_._var_resume(`c1`, _._const(2)),
  _._script(`c3`, ($scope) => {
    for (let fn of $setHtml_getter($scope)) fn(`Hoist from custom tag`);
  }),
  init());

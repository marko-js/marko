// size: 307 (min) 199 (brotli)
const $value = _$.state(3, _$.tagVarSignal);
_$.register("a0", function ($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
});
const $count$mytag$content_effect = _$.effect(
    "c1",
    ($scope, { _: { 3: count } }) =>
      _$.on($scope[0], "click", function () {
        _$.tagVarSignalChange($scope._[0], ++count);
      }),
  ),
  $count$mytag$content = _$.dynamicClosureRead(3, ($scope, count) => {
    (_$.data($scope[1], count), $count$mytag$content_effect($scope));
  }),
  $count_closure = _$.dynamicClosure($count$mytag$content);
(_$.registerBoundSignal("c2", _$.value(3, $count_closure)), init());

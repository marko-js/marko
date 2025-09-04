// size: 277 (min) 188 (brotli)
const $value = _._let(3, _._return);
_._resume("a0", function ($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
});
const $mytag_content__count__script = _._script(
    "c1",
    ($scope, { _: { 3: count } }) =>
      _._on($scope[0], "click", function () {
        _._var_change($scope._[0], ++count);
      }),
  ),
  $mytag_content__count = _._closure_get(3, ($scope, count) => {
    (_._text($scope[1], count), $mytag_content__count__script($scope));
  }),
  $count__closure = _._closure($mytag_content__count);
(_._var_resume("c2", _._const(3, $count__closure)), init());

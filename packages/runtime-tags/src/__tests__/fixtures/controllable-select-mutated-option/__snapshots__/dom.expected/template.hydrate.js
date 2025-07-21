// size: 629 (min) 327 (brotli)
const $opt$for$content = _$.value(3, ($scope, opt) => {
    (_$.attr($scope[0], "value", opt), _$.data($scope[1], opt));
  }),
  $params2$for$content = _$.value(2, ($scope, $params2) =>
    $opt$for$content($scope, $params2[0]),
  ),
  $for_content = _$.createRenderer(
    "<option> </option>",
    " D ",
    0,
    $params2$for$content,
  ),
  $for = _$.loopOf(0, $for_content),
  $options_effect = _$.effect("a1", ($scope, { 4: options }) => {
    (_$.on($scope[2], "click", function () {
      $options($scope, (options = options.slice(1)));
    }),
      _$.on($scope[3], "click", function () {
        $options(
          $scope,
          (options = [options.length ? options[0] - 1 : 3, ...options]),
        );
      }));
  }),
  $options = _$.state(4, ($scope, options) => {
    ($options_($scope, options?.[0]),
      $for($scope, [options, (v) => v]),
      $options_effect($scope));
  }),
  $value = _$.state(6, ($scope, value) => {
    (_$.controllable_select_value($scope, 0, value, $valueChange($scope)),
      _$.data($scope[1], value));
  }),
  $options_ = _$.value(5, $value);
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_$.effect("a2", ($scope) => {
  (_$.controllable_select_value_effect($scope, 0),
    _$.on($scope[0], "change", console.log),
    _$.on($scope[0], "input", console.log));
}),
  _$.register("a0", $valueChange),
  init());

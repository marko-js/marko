// size: 627 (min) 306 (brotli)
const $for_content__opt = _._const(3, ($scope, opt) => {
    (_._attr($scope[0], "value", opt), _._text($scope[1], opt));
  }),
  $for_content__$params = _._const(2, ($scope, $params2) =>
    $for_content__opt($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<option> </option>",
    " D l",
    0,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $options__script = _._script("a1", ($scope, { 4: options }) => {
    (_._on($scope[2], "click", function () {
      $options($scope, (options = options.slice(1)));
    }),
      _._on($scope[3], "click", function () {
        $options(
          $scope,
          (options = [options.length ? options[0] - 1 : 3, ...options]),
        );
      }));
  }),
  $options = _._let(4, ($scope, options) => {
    ($options_($scope, options?.[0]),
      $for($scope, [options, (v) => v]),
      $options__script($scope));
  }),
  $value = _._let(6, ($scope, value) => {
    (_._attr_select_value($scope, 0, value, $valueChange($scope)),
      _._text($scope[1], value));
  }),
  $options_ = _._const(5, $value);
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a2", ($scope) => {
  (_._attr_select_value_script($scope, 0),
    _._on($scope[0], "change", console.log),
    _._on($scope[0], "input", console.log));
}),
  _._resume("a0", $valueChange),
  init());

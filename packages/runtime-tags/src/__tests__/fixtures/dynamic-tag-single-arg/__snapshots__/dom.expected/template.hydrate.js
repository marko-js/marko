// size: 301 (min) 200 (brotli)
const $input = _._const(2, ($scope, input) => _._text($scope[0], input));
function $setup($scope) {
  _._return($scope, "hello from other");
}
const tags = [_._template("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $x__script = _._script("b0", ($scope, { 3: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[1], x),
      $dynamicTag($scope, tags[0], () => [x]),
      $x__script($scope));
  });
init();

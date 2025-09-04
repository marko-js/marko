// size: 410 (min) 222 (brotli)
const $for_content__x = _._const(2, ($scope, x) => _._text($scope[0], x)),
  $for_content__$params = _._const(1, ($scope, $params2) =>
    $for_content__x($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<li> </li>",
    "D l",
    0,
    $for_content__$params,
  ),
  $open__script = _._script("a0", ($scope, { 3: open }) =>
    _._on($scope[1], "click", function () {
      $open($scope, (open = !open));
    }),
  ),
  $open = _._let(3, ($scope, open) => {
    (_._attr($scope[0], "hidden", !open), $open__script($scope));
  }),
  $for = _._for_of(0, $for_content),
  $list__script = _._script("a1", ($scope, { 4: list }) =>
    _._on($scope[2], "click", function () {
      $list($scope, (list = [].concat(list).reverse()));
    }),
  ),
  $list = _._let(4, ($scope, list) => {
    ($for($scope, [
      list,
      function (x) {
        return x;
      },
    ]),
      $list__script($scope));
  });
init();

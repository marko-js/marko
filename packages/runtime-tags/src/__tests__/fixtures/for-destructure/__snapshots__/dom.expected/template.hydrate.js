// size: 463 (min) 238 (brotli)
const $name$for$content = _$.value(4, ($scope, name) =>
    _$.data($scope[0], name),
  ),
  $description$for$content = _$.value(5, ($scope, description) =>
    _$.data($scope[1], description),
  ),
  $params2$for$content = _$.value(2, ($scope, $params2) =>
    $temp$for$content($scope, $params2?.[0]),
  ),
  $temp$for$content = _$.value(3, ($scope, $temp) => {
    $name$for$content($scope, $temp.name),
      $description$for$content($scope, $temp.description);
  }),
  $for_content = _$.createRenderer(
    "<div><!>: <!></div>",
    "D%c%",
    0,
    $params2$for$content,
  ),
  $for = _$.loopOf(0, $for_content),
  $items_effect = _$.effect("a0", ($scope, { 3: items }) => {
    _$.on($scope[1], "click", function () {
      $items($scope, [
        ...items,
        { name: "JavaScript", description: "Java, but scriptier" },
      ]);
    }),
      _$.on($scope[2], "click", function () {
        $items($scope, items.slice(0, -1));
      });
  }),
  $items = _$.state(3, ($scope, items) => {
    $for($scope, [items]), $items_effect($scope);
  });
init();

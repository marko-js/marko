// size: 168 (min) 126 (brotli)
const $count__script = _._script("a0", ($scope, { 1: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(1, ($scope, count) => {
    (_._text_content($scope[0], `\n  .test {\n    content: ${count}\n  }\n`),
      $count__script($scope));
  });
init();

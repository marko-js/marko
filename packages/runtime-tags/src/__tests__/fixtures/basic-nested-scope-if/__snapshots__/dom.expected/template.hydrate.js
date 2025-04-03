// size: 427 (min) 239 (brotli)
const $clickCount$else$content = _$.conditionalClosure(
    1,
    0,
    1,
    ($scope, clickCount) => _$.data($scope[0], clickCount),
  ),
  $else_content = _$.createRenderer(
    "<span>The button was clicked <!> times.</span>",
    "Db%",
    0,
    0,
    ($scope) => $clickCount$else$content._($scope),
  ),
  $clickCount$if$content_effect = _$.effect(
    "a0",
    ($scope, { _: { 1: clickCount } }) =>
      _$.on($scope[0], "click", function () {
        $clickCount($scope._, clickCount + 1);
      }),
  ),
  $clickCount$if$content = _$.conditionalClosure(
    1,
    0,
    0,
    ($scope, clickCount) => {
      _$.data($scope[1], clickCount), $clickCount$if$content_effect($scope);
    },
  ),
  $if_content = _$.createRenderer("<button> </button>", " D ", 0, 0, ($scope) =>
    $clickCount$if$content._($scope),
  ),
  $if = _$.conditional(0, $if_content, $else_content),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $if($scope, clickCount < 3 ? 0 : 1),
      $clickCount$if$content($scope),
      $clickCount$else$content($scope);
  });
init();

// size: 407 (min) 235 (brotli)
const $clickCount$else$content = _$.conditionalClosure(
    1,
    0,
    1,
    ($scope, clickCount) => _$.data($scope[0], clickCount),
  ),
  $setup$else$content = $clickCount$else$content,
  $else_content = _$.createRenderer(
    "<span>The button was clicked <!> times.</span>",
    "Db%",
    $setup$else$content,
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
  $setup$if$content = $clickCount$if$content,
  $if_content = _$.createRenderer(
    "<button> </button>",
    " D ",
    $setup$if$content,
  ),
  $if = _$.conditional(0, $if_content, $else_content),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $if($scope, clickCount < 3 ? 0 : 1),
      $clickCount$if$content($scope),
      $clickCount$else$content($scope);
  });
init();

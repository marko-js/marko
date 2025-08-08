// size: 857 (min) 369 (brotli)
function $setup$1($scope) {
  _$.tagVarSignal($scope, $_return($scope));
}
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
_$.register("a0", $_return);
var Child = _$.createTemplate("a", "<div></div>", " b", $setup$1);
const $dynamicTag = _$.dynamicTag(0),
  $dynamicTag2 = _$.dynamicTag(1),
  $input_content = _$.value(4, ($scope, input_content) => {
    ($dynamicTag($scope, input_content), $dynamicTag2($scope, input_content));
  }),
  $get$hoisted_setHtml = _$.hoist(2, "a4"),
  $dynamicTag$inputshowsectionnull$content = _$.dynamicTag(
    0,
    0,
    () => $setHtml3$inputshowsectionnull$content,
  ),
  $setHtml3$inputshowsectionnull$content = _$.registerBoundSignal(
    "c1",
    _$.value(2),
  );
_$.registerContent(
  "c0",
  "<!><!><!>",
  "D1D",
  ($scope) => {
    $dynamicTag$inputshowsectionnull$content($scope, Child);
  },
  0,
  "a4",
);
const $get$hoisted_setHtml2 = _$.hoist(2, "a3", "a2"),
  $dynamicTag$thing$content2 = _$.dynamicTag(
    0,
    0,
    () => $setHtml2$thing$content,
  ),
  $setHtml2$thing$content = _$.registerBoundSignal("c3", _$.value(2)),
  $setup$thing$content2 = ($scope) => {
    $dynamicTag$thing$content2($scope, Child);
  },
  $thing_content2 = _$.createContent(
    "c2",
    "<!><!><!>",
    "D1D",
    $setup$thing$content2,
    0,
    "a3",
  );
(_$.registerContent(
  "c4",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  ($scope) => {
    ($scope[0], $input_content($scope[0], $thing_content2($scope)));
  },
  0,
  "a2",
),
  _$.register("c6", _$.hoist(2, "a1")),
  _$.registerBoundSignal("c7", _$.value(2)),
  _$.effect("c8", ({ 6: $hoisted_setHtml }) => {
    for (const fn of 6) fn("Hoist from custom tag");
  }),
  _$.effect("c9", ($scope) => {
    ($get$hoisted_setHtml2($scope)("Hoist from dynamic tag"),
      $get$hoisted_setHtml($scope)("Hoist from dynamic tag"));
  }),
  init());

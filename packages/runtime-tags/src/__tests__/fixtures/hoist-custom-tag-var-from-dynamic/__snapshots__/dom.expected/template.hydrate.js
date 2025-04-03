// size: 827 (min) 374 (brotli)
const $dynamicTag2 = _$.dynamicTag(1),
  $dynamicTag = _$.dynamicTag(),
  $input_content = _$.value(4, ($scope, input_content) => {
    $dynamicTag($scope, input_content), $dynamicTag2($scope, input_content);
  });
function $setup($scope) {
  _$.tagVarSignal($scope, $_return($scope));
}
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
_$.register("a0", $_return);
const $get$hoisted_setHtml = _$.hoist(16, "a4"),
  $setHtml3$inputshowsectionnull$content = _$.registerBoundSignal(
    "c1",
    _$.value(16),
  );
_$.registerContent(
  "c0",
  "<div></div>",
  "0 b&",
  ($scope) => {
    _$.setTagVar($scope, 0, $setHtml3$inputshowsectionnull$content),
      $setup($scope[0]);
  },
  0,
  0,
  "a4",
);
const $get$hoisted_setHtml2 = _$.hoist(11, "a3", "a2"),
  $setHtml2$thing$content = _$.registerBoundSignal("c3", _$.value(11)),
  $setup$thing$content2 = ($scope) => {
    _$.setTagVar($scope, 0, $setHtml2$thing$content), $setup($scope[0]);
  },
  $thing_content2 = _$.createContent(
    "c2",
    "<div></div>",
    "0 b&",
    $setup$thing$content2,
    0,
    0,
    "a3",
  );
_$.registerContent(
  "c4",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  ($scope) => {
    $scope[0], $input_content($scope[0], $thing_content2($scope));
  },
  0,
  0,
  "a2",
),
  _$.register("c6", _$.hoist(5, "a1")),
  _$.registerBoundSignal("c7", _$.value(5)),
  _$.effect("c8", ({ 6: $hoisted_setHtml }) => {
    for (const fn of 6) fn("Hoist from custom tag");
  }),
  _$.effect("c9", ($scope) => {
    $get$hoisted_setHtml2($scope)("Hoist from dynamic tag"),
      $get$hoisted_setHtml($scope)("Hoist from dynamic tag");
  }),
  init();

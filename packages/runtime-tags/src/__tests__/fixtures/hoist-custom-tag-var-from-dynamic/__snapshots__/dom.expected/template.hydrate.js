// size: 774 (min) 336 (brotli)
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $input_content = _._const(4, ($scope, input_content) => {
    ($dynamicTag($scope, input_content), $dynamicTag2($scope, input_content));
  });
function $setup($scope) {
  _._return($scope, $_return($scope));
}
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
_._resume("a0", $_return);
const $get$hoisted_setHtml = _._hoist(2, "a4"),
  $inputshowsectionnull_content__setHtml = _._var_resume("c0", _._const(2));
_._content_resume(
  "c1",
  "<div></div>",
  "0 b&",
  ($scope) => {
    (_._var($scope, 0, $inputshowsectionnull_content__setHtml),
      $setup($scope[0]));
  },
  0,
  "a4",
);
const $get$hoisted_setHtml2 = _._hoist(2, "a3", "a2"),
  $thing_content2__setHtml = _._var_resume("c2", _._const(2)),
  $thing_content2__setup = ($scope) => {
    (_._var($scope, 0, $thing_content2__setHtml), $setup($scope[0]));
  },
  $thing_content2 = _._content(
    "c3",
    "<div></div>",
    "0 b&",
    $thing_content2__setup,
    0,
    "a3",
  );
(_._content_resume(
  "c4",
  "<!><!><!><!><!><!>",
  "b/b%b%c&b",
  ($scope) => {
    ($scope[0], $input_content($scope[0], $thing_content2($scope)));
  },
  0,
  "a2",
),
  _._resume("c5", _._hoist(2, "a1")),
  _._var_resume("c6", _._const(2)),
  _._script("c8", ({ 6: $hoisted_setHtml }) => {
    for (const fn of $hoisted_setHtml) fn("Hoist from custom tag");
  }),
  _._script("c9", ($scope) => {
    ($get$hoisted_setHtml2($scope)("Hoist from dynamic tag"),
      $get$hoisted_setHtml($scope)("Hoist from dynamic tag"));
  }),
  init());

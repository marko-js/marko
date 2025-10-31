// size: 831 (min) 368 (brotli)
function $setup$1($scope) {
  _._return($scope, $_return($scope));
}
function $_return($scope) {
  return function (html) {
    $scope[0].innerHTML = html;
  };
}
_._resume("a0", $_return);
var Child = _._template("a", "<div></div>", " b", $setup$1);
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $input_content = _._const(4, ($scope) => {
    ($dynamicTag($scope, $scope[4]), $dynamicTag2($scope, $scope[4]));
  }),
  $get$hoisted_setHtml = _._hoist(2, "a4"),
  $inputshowsectionnull_content__dynamicTag = _._dynamic_tag(
    0,
    0,
    () => $inputshowsectionnull_content__setHtml,
  ),
  $inputshowsectionnull_content__setHtml = _._var_resume("c0", _._const(2));
_._content_resume(
  "c1",
  "<!><!><!>",
  "b1c",
  ($scope) => {
    $inputshowsectionnull_content__dynamicTag($scope, Child);
  },
  0,
  "a4",
);
const $get$hoisted_setHtml2 = _._hoist(2, "a3", "a2"),
  $thing_content2__dynamicTag = _._dynamic_tag(
    0,
    0,
    () => $thing_content2__setHtml,
  ),
  $thing_content2__setHtml = _._var_resume("c2", _._const(2)),
  $thing_content2__setup = ($scope) => {
    $thing_content2__dynamicTag($scope, Child);
  },
  $thing_content2 = _._content(
    "c3",
    "<!><!><!>",
    "b1c",
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
  _._script("c8", ($scope) => {
    for (const fn of $scope[6]) fn("Hoist from custom tag");
  }),
  _._script("c9", ($scope) => {
    ($get$hoisted_setHtml2($scope)("Hoist from dynamic tag"),
      $get$hoisted_setHtml($scope)("Hoist from dynamic tag"));
  }),
  init());

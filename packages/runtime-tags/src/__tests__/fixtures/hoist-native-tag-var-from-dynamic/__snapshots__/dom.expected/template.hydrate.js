// size: 744 (min) 320 (brotli)
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $input_content = _._const(4, ($scope) => {
    ($dynamicTag($scope, $scope[4]), $dynamicTag2($scope, $scope[4]));
  }),
  $get$hoisted_el = _._hoist("j0", "a4");
_._content_resume("b0", "<p></p>", " b", 0, 0, "a4");
const $get$hoisted_el2 = _._resume("b1", _._hoist("j0", "a3"));
_._resume("b2", _._hoist("j0", "a3", "a2"));
const $child_content2 = _._content("b3", "<div></div>", " b", 0, 0, "a3"),
  $inputshowChildnull_content__$hoisted_el__script = _._script(
    "b4",
    ($scope) => {
      for (const element of $scope[1]) element().classList.add("inner");
    },
  ),
  $inputshowChildnull_content__$hoisted_el = _._const(
    1,
    $inputshowChildnull_content__$hoisted_el__script,
  );
(_._content_resume(
  "b5",
  "<!><!><!><!><!><!>",
  "b/b%b%c&b",
  ($scope) => {
    ($scope[0],
      $input_content($scope[0], $child_content2($scope)),
      $inputshowChildnull_content__$hoisted_el(
        $scope,
        $get$hoisted_el2($scope),
      ));
  },
  0,
  "a2",
),
  _._resume("b6", _._hoist("j0", "a1")),
  _._script("b8", ($scope) => {
    for (const element of $scope[7]) element().classList.add("outer");
  }),
  _._script("b9", ($scope) => {
    for (const element of $scope[6])
      element().innerHTML = "Hoist from custom tag";
  }),
  _._script("b10", ($scope) => {
    {
      const element = $get$hoisted_el($scope)();
      element && (element.innerHTML = "Hoist from dynamic tag");
    }
  }),
  init());

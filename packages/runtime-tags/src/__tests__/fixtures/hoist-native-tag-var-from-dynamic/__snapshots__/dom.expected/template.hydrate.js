// size: 723 (min) 310 (brotli)
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $get$hoisted_el = _._hoist("Ja", "B4");
_._content_resume("b0", "<p></p>", " b", 0, 0, "B4");
const $get$hoisted_el2 = _._resume("b1", _._hoist("Ja", "B3"));
_._resume("b2", _._hoist("Ja", "B3", "B2"));
const $child_content2 = _._content("b3", "<div></div>", " b", 0, 0, "B3"),
  $inputshowChildnull_content__$hoisted_el__script = _._script(
    "b4",
    ($scope) => {
      for (const element of $scope.b) element().classList.add("inner");
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
    ($scope.a,
      (($scope, input_content) => {
        ($dynamicTag($scope, input_content),
          $dynamicTag2($scope, input_content));
      })($scope.a, $child_content2($scope)),
      $inputshowChildnull_content__$hoisted_el(
        $scope,
        $get$hoisted_el2($scope),
      ));
  },
  0,
  "B2",
),
  _._resume("b6", _._hoist("Ja", "B1")),
  _._script("b8", ($scope) => {
    for (const element of $scope.h) element().classList.add("outer");
  }),
  _._script("b9", ($scope) => {
    for (const element of $scope.g)
      element().innerHTML = "Hoist from custom tag";
  }),
  _._script("b10", ($scope) => {
    {
      const element = $get$hoisted_el($scope)();
      element && (element.innerHTML = "Hoist from dynamic tag");
    }
  }),
  init());

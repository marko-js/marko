// size: 743 (min) 330 (brotli)
const $dynamicTag = _$.dynamicTag(),
  $dynamicTag2 = _$.dynamicTag(1),
  $input_content = _$.value(4, ($scope, input_content) => {
    ($dynamicTag($scope, input_content), $dynamicTag2($scope, input_content));
  }),
  $get$hoisted_el = _$.hoist("j0", "a4");
_$.registerContent("b0", "<p></p>", " ", 0, 0, "a4");
const $get$hoisted_el2 = _$.register("b2", _$.hoist("j0", "a3"));
_$.register("b3", _$.hoist("j0", "a3", "a2"));
const $child_content2 = _$.createContent("b1", "<div></div>", " ", 0, 0, "a3"),
  $hoisted_el2$inputshowChildnull$content_effect = _$.effect(
    "b5",
    ({ 1: $hoisted_el2 }) => {
      for (const element of 1) element().classList.add("inner");
    },
  ),
  $hoisted_el2$inputshowChildnull$content = _$.value(
    1,
    $hoisted_el2$inputshowChildnull$content_effect,
  );
(_$.registerContent(
  "b4",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  ($scope) => {
    ($scope[0],
      $input_content($scope[0], $child_content2($scope)),
      $hoisted_el2$inputshowChildnull$content(
        $scope,
        $get$hoisted_el2($scope),
      ));
  },
  0,
  "a2",
),
  _$.register("b7", _$.hoist("j0", "a1")),
  _$.effect("b8", ({ 7: $hoisted_el3 }) => {
    for (const element of 7) element().classList.add("outer");
  }),
  _$.effect("b9", ({ 6: $hoisted_el }) => {
    for (const element of 6) element().innerHTML = "Hoist from custom tag";
  }),
  _$.effect("b10", ($scope) => {
    {
      const element = $get$hoisted_el($scope)();
      element && (element.innerHTML = "Hoist from dynamic tag");
    }
  }),
  init());

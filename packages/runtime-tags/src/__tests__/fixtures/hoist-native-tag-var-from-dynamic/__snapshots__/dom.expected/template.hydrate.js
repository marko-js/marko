// size: 636 (min) 290 (brotli)
const $dynamicTag = _._dynamic_tag(0),
  $dynamicTag2 = _._dynamic_tag(1),
  $el3_getter = _._hoist(0, "B4");
_._content_resume("b0", "<p></p>", " b", 0, 0, "B4");
const $inputshowChildnull_content__$el2_getter = _._hoist_resume("b1", 0, "B3"),
  $el2_getter = _._hoist_resume("b2", 0, "B3", "B2"),
  $child_content2 = _._content("b3", "<div></div>", " b", 0, 0, "B3"),
  $inputshowChildnull_content__setup__script = _._script("b4", ($scope) => {
    for (const el of $inputshowChildnull_content__$el2_getter($scope))
      el.classList.add("inner");
  });
_._content_resume(
  "b5",
  "<!><!><!><!><!><!>",
  "b/b%b%c&b",
  ($scope) => {
    ($scope.a,
      (($scope, input_content) => {
        ($dynamicTag($scope, input_content),
          $dynamicTag2($scope, input_content));
      })($scope.a, $child_content2($scope)),
      $inputshowChildnull_content__setup__script($scope));
  },
  0,
  "B2",
);
const $el_getter = _._hoist_resume("b6", 0, "B1");
(_._script("b8", ($scope) => {
  for (const el of $el_getter($scope)) el.innerHTML = "Hoist from custom tag";
  for (const el of $el2_getter($scope)) el.classList.add("outer");
  {
    const el = $el3_getter($scope)();
    el && (el.innerHTML = "Hoist from dynamic tag");
  }
}),
  init());

// size: 368 (min) 212 (brotli)
const $input_thing_selected = _._const(5, ($scope, input_thing_selected) =>
    _._attr_class_item($scope[0], "selected", input_thing_selected),
  ),
  $dynamicTag = _._dynamic_tag(1),
  $input_thing_content = _._const(6, $dynamicTag),
  $input_thing = _._const(4, ($scope, input_thing) => {
    ($input_thing_selected($scope, input_thing?.selected),
      $input_thing_content($scope, input_thing?.content));
  }),
  $myThing_content = _._content("b0", "<span>The thing</span>", "b"),
  $myThing = _._const(3, ($scope, myThing) => $input_thing($scope[0], myThing)),
  $selected__script = _._script("b1", ($scope, { 2: selected }) =>
    _._on($scope[1], "click", function () {
      $selected($scope, (selected = !selected));
    }),
  ),
  $selected = _._let(2, ($scope, selected) => {
    ($myThing($scope, {
      selected: selected,
      content: $myThing_content($scope),
    }),
      $selected__script($scope));
  });
init();

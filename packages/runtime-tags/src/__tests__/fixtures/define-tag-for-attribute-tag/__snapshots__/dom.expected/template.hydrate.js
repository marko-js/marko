// size: 353 (min) 212 (brotli)
const $input_thing_selected = _$.value(5, ($scope, input_thing_selected) =>
    _$.classItem($scope[0], "selected", input_thing_selected),
  ),
  $dynamicTag = _$.dynamicTag(1),
  $input_thing_content = _$.value(6, $dynamicTag),
  $input_thing = _$.value(4, ($scope, input_thing) => {
    ($input_thing_selected($scope, input_thing?.selected),
      $input_thing_content($scope, input_thing?.content));
  }),
  $define_content = _$.createContent("b0", "<span>The thing</span>"),
  $myThing = _$.value(3, ($scope, myThing) => $input_thing($scope[0], myThing)),
  $selected_effect = _$.effect("b1", ($scope, { 2: selected }) =>
    _$.on($scope[1], "click", function () {
      $selected($scope, !selected);
    }),
  ),
  $selected = _$.state(2, ($scope, selected) => {
    ($myThing($scope, { selected: selected, content: $define_content($scope) }),
      $selected_effect($scope));
  });
init();

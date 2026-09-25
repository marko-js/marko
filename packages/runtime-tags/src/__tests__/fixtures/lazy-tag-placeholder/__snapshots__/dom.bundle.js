// template.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $placeholder_content = _content("b0", "loading...");
const $try_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.f), 0, "b2", 5);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($try_content__count));
const $setup__script = _script("b3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));

// child.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

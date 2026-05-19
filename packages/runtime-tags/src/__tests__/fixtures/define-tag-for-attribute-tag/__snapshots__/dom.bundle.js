// total: 13011 (min) 5033 (brotli)
// tags/child.marko: 0 (min) 1 (brotli)
const $input_thing_selected = /* @__PURE__ */ _const(5, ($scope) => _attr_class_item($scope.a, "selected", $scope.f));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $input_thing_content = ($scope, input_thing_content) => $dynamicTag($scope, input_thing_content);
const $input_thing = ($scope, input_thing) => {
	$input_thing_selected($scope, input_thing?.selected);
	$input_thing_content($scope, input_thing?.content);
};

// template.marko: 192 (min) 143 (brotli)
const $myThing_content = /* @__PURE__ */ _content("a0", "<span>The thing</span>", "b");
const $myThing = ($scope, myThing) => $input_thing($scope.a, myThing);
const $selected__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$selected($scope, !$scope.c);
}));
const $selected = /* @__PURE__ */ _let(2, ($scope) => {
	$myThing($scope, {
		selected: $scope.c,
		content: $myThing_content($scope)
	});
	$selected__script($scope);
});

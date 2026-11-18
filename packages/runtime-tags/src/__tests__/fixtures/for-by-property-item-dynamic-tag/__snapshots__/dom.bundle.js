// tags/child.marko
const $for_content__item = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__setup = ($scope) => _text($scope.b, $scope.M);
const $for_content__$params = ($scope, item) => $for_content__item($scope, item);
const $for = /*@__PURE__*/ _for_of(0, "<span><!>:<!></span>", "D%c%", $for_content__setup, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item, "id"]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<b> </b>", "D "), { 1: ($scope) => _text($scope.a, $scope.b) });
const $ids = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	forOf($scope.c, (id) => $item = attrTags($item, {
		id,
		content: $item_content($scope, { 1: id })
	}));
	$input_item($scope.a, $item);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$ids($scope, [...$scope.c, "b"]);
}));

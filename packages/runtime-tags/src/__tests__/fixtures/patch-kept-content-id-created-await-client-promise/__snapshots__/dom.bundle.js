// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__c = /*@__PURE__*/ _closure_get_patch("c0", 8, ($scope) => $input_content($scope.a, $scope._.g));
const $c = _fill_let("c4", 6, /* @__PURE__ */ _closure($await_content__c));
const $await_promise = /*@__PURE__*/ _await_promise(1);
const $p = /*@__PURE__*/ _fill_let("c5", 7, ($scope) => $await_promise($scope, $scope.h));
const $setup__script = _script("c3", ($scope) => _on($scope.a, "click", function() {
	$p($scope, 0);
}));

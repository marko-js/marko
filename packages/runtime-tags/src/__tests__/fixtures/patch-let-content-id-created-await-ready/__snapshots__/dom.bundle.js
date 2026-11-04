// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__c = /*@__PURE__*/ _closure_get_patch("c0", 7, ($scope) => $input_content($scope.a, $scope._.g));
const $c = /*@__PURE__*/ _fill_let("c4", 6, /* @__PURE__ */ _closure($await_content__c));
const $setup__script = _script("c3", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content$1("a1", "<input><label> </label>", " b D ", $outer_content__setup);

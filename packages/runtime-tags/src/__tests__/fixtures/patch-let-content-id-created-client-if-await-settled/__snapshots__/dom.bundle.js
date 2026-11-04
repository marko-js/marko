// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__c = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._._.g), ($scope) => $scope._._, "c0");
const $await_content = /*@__PURE__*/ _await_content(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__c);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $if_content__input_promise = /*@__PURE__*/ _if_closure_patch("c1", 1, 0, ($scope) => $if_content__await_promise($scope, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $c__closure = /*@__PURE__*/ _closure($await_content__c);
const $c = /*@__PURE__*/ _fill_let("c3", 6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$c__closure($scope);
});
const $setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
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

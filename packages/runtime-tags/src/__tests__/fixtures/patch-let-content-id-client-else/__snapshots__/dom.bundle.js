// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $if_content__c = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.f));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__c, "<p>none</p>");
const $c = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__c($scope);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a5", 0);
const $if_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__uid($scope, _id($scope));
};
const $outer_content__if = /*@__PURE__*/ _if(0, "<input><label> </label>", " b D ", $if_content__setup);
const $outer_content__input_show = /*@__PURE__*/ _closure_get_patch("a3", 5, ($scope) => $outer_content__if($scope, $scope._.d ? 0 : 1), 0, "a4", 0);
const $outer_content = _content$1("a2", "<!><!><!>", "b%", $outer_content__input_show);

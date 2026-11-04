// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $for_content__$params = ($scope, $params2) => $input_content($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), 0, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
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
const $outer_content__input_show = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => $outer_content__if($scope, $scope._.d ? 0 : 1), 0, "a4", 0);
const $outer_content = _content$1("a3", "<!><!><!>", "b%", $outer_content__input_show);

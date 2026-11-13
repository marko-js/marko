// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// template.marko
const $for_content__$params = ($scope, $params2) => $input_content($scope.a, $params2[0]);
const $Field_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => _text($scope.c, $scope._.e), 0, "a3", 0);
const $Field_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $Field_content__setup = ($scope) => {
	$Field_content__input_label($scope);
	$Field_content__uid($scope, _id($scope));
};
const $Field_content = _content$1("a0", "<input><label> </label>", " b D ", $Field_content__setup);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), 0, $for_content__$params);
const $rows = _let(6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

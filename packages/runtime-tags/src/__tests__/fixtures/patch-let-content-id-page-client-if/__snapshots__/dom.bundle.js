// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// template.marko
const $if_content__field = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.g));
const $if_content__setup = $if_content__field;
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
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $field = _let(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$if_content__field($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$field($scope, void 0);
}));

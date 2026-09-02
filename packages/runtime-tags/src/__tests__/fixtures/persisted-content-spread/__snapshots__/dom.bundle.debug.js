// template.marko
const $template = "<main><div></div><section></section><button> </button></main>";
const $walks = "D b b D m";
const $extra_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title)), 0);
const $extra_content__setup = $extra_content__input_title;
const $extra_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $extra_content__setup);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $input_attrs__OR__extra__script = _script("__tests__/template.marko_0_input_attrs#7_extra#9", ($scope) => _attrs_script($scope, "#section/1"));
const $input_attrs__OR__extra = /*@__PURE__*/ _or(10, ($scope) => {
	_attrs_content($scope, "#section/1", {
		...$scope.input_attrs,
		content: $scope.extra
	});
	$input_attrs__OR__extra__script($scope);
});
const $extra = /*@__PURE__*/ _const("extra", ($scope) => {
	_attr_content($scope, "#div/0", $scope.extra);
	$input_attrs__OR__extra($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$extra($scope, { content: $extra_content($scope) });
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#7", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#div/0", $scope.input_attrs);
	$input_attrs__OR__extra($scope);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_attrs($scope, input.attrs);
};
const $input_title__closure = /*@__PURE__*/ _closure($extra_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

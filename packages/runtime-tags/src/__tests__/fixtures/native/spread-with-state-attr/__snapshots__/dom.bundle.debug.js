// template.marko
const $template = "<div></div><button>update</button>";
const $walks = " b b";
const $input_attrs__OR__title__script = _script("__tests__/template.marko_0_input_attrs#4_title#5", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs__OR__title = /*@__PURE__*/ _or(6, ($scope) => {
	_attrs_content($scope, "#div/0", {
		title: $scope.title,
		...$scope.input_attrs
	});
	$input_attrs__OR__title__script($scope);
});
const $title = /*@__PURE__*/ _let("title/5", $input_attrs__OR__title);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$title($scope, "b");
}));
function $setup($scope) {
	$title($scope, "a");
	$setup__script($scope);
}
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $input_attrs__OR__title);
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

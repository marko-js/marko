// template.marko
const $template = "<div></div><div></div><button>+</button>";
const $walks = " b b b";
function withCount(attrs, count) {
	return {
		...attrs,
		"data-count": count
	};
}
const $input_attrs__OR__count__script = _script("__tests__/template.marko_0_input_attrs#5_count#6", ($scope) => _attrs_script($scope, "#div/1"));
const $input_attrs__OR__count = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs_content($scope, "#div/1", withCount($scope.input_attrs, $scope.count));
	$input_attrs__OR__count__script($scope);
});
const $count = /*@__PURE__*/ _let("count/6", $input_attrs__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#5", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input_attrs);
	$input_attrs__OR__count($scope);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

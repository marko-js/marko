// template.marko
const $template = "<main><button> </button><div class=fixed> </div></main>";
const $walks = "D D l D m";
const $count = /*@__PURE__*/ _let("count/9", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#6", ($scope) => _attrs_script($scope, "#button/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#button/0", $scope.input_attrs, { "on-click": 1 });
	$input_attrs__script($scope);
});
const $input_box__script = _script("__tests__/template.marko_0_input_box#7", ($scope) => _attrs_script($scope, "#div/2"));
const $input_box = /*@__PURE__*/ _const("input_box", ($scope) => {
	_attrs_partial($scope, "#div/2", $scope.input_box, { class: 1 });
	$input_box__script($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/3"], input_label);
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_box($scope, input.box);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

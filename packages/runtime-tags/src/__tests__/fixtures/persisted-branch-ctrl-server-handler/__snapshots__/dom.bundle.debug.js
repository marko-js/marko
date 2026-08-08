// template.marko
const $template = "<main><!><button>+</button><output></output></main>";
const $walks = "D%b l";
const $if_content__onChange = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "onChange", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr_input_value($scope, "#input/0", "x", $scope._.onChange)));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__onChange._($scope);
	$if_content__setup__script($scope);
};
const $onChange2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "onChange", $if_content__onChange);
const $input_prefix = /*@__PURE__*/ _const("input_prefix", ($scope) => $onChange2($scope, $onChange($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<input>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_prefix($scope, input.prefix);
function $onChange($scope) {
	return (next) => {
		document.querySelector("output").textContent = $scope.input_prefix + next;
	};
}
_resume("__tests__/template.marko_0/onChange", $onChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<div>v=<!>|wrong=<!></div><input>";
const $walks = "Db%c%l b";
const $key__OR__state = /*@__PURE__*/ _or(7, ($scope) => _attr_input_value($scope, "#input/2", $scope.state[$scope.key], $scope.state[$scope.key + "Change"]));
const $state = /*@__PURE__*/ _const("state", $key__OR__state);
const $v = /*@__PURE__*/ _let("v/3", ($scope) => {
	_text($scope["#text/0"], $scope.v);
	$state($scope, {
		v: $scope.v,
		vChange(x) {
			$v($scope, x);
		},
		keyChange(x) {
			$wrong($scope, x);
		}
	});
});
const $wrong = /*@__PURE__*/ _let("wrong/4", ($scope) => _text($scope["#text/1"], $scope.wrong));
const $key = /*@__PURE__*/ _const("key", $key__OR__state);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/2"));
function $setup($scope) {
	$v($scope, "v1");
	$wrong($scope, "");
	$key($scope, "v");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

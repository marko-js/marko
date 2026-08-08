// tags/field/index.marko
const $template$1 = "<input><em> </em>";
const $walks$1 = " bD l";
const $v = /*@__PURE__*/ _let("v/2", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.v, $valueChange($scope));
	_text($scope["#text/1"], $scope.v);
});
const $setup__script$1 = _script("__tests__/tags/field/index.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup$1($scope) {
	$v($scope, "");
	$setup__script$1($scope);
}
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("__tests__/tags/field/index.marko_0/valueChange", $valueChange);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

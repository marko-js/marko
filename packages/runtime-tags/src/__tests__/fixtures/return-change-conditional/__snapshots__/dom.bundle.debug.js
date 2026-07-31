// tags/editable.marko
const $template$1 = "";
const $walks$1 = "";
const $x = /*@__PURE__*/ _let("x/3", ($scope) => _return($scope, $scope.x));
function $setup$1($scope) {
	$x($scope, "a");
}
const $input_canEdit = /*@__PURE__*/ _const("input_canEdit", ($scope) => _return_change($scope, $scope.input_canEdit && $valueChange($scope)));
const $input = ($scope, input) => $input_canEdit($scope, input.canEdit);
const $valueChange = ($scope) => (v) => {
	$x($scope, v);
};
_resume("__tests__/tags/editable.marko_0/valueChange", $valueChange);
var editable_default = /*@__PURE__*/ _template("__tests__/tags/editable.marko", "", "", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button id=toggle>toggle</button><button id=assign>assign</button><div> </div>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b bD l`)("");
const $canEdit = /*@__PURE__*/ _let("canEdit/5", ($scope) => $input_canEdit($scope["#childScope/0"], $scope.canEdit));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$canEdit($scope, false);
	});
	_on($scope["#button/3"], "click", function() {
		_var_change($scope["#childScope/0"], $scope.val + "!", "val");
	});
});
function $setup($scope) {
	_var($scope, "#childScope/0", $val);
	$setup$1($scope["#childScope/0"]);
	$canEdit($scope, true);
	$setup__script($scope);
}
const $val = _var_resume("__tests__/template.marko_0_val#6/var", /*@__PURE__*/ _const("val", ($scope) => _text($scope, "#text/4", $scope.val)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

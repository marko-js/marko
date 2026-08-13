// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $mutualB_getter = /*@__PURE__*/ _hoist("mutualB");
const $onCtrl_getter = _hoist_resume("__tests__/template.marko_0_onCtrl#8/hoist", "onCtrl");
const $mutualB2 = /*@__PURE__*/ _const("mutualB", ($scope) => _assert_hoist($scope.mutualB));
const $mutualA2 = /*@__PURE__*/ _const("mutualA", ($scope) => $mutualB2($scope, $mutualB($scope)));
const $cls = /*@__PURE__*/ _const("cls", ($scope) => $alias($scope, $scope.cls));
const $obj2 = /*@__PURE__*/ _const("obj");
const $ctrl = /*@__PURE__*/ _let_change("ctrl/6", ($scope) => _text($scope["#text/1"], $scope.ctrl));
const $onCtrl2 = /*@__PURE__*/ _const("onCtrl", ($scope) => _assert_hoist($scope.onCtrl));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.mutualA();
	$scope.obj.m();
	$scope.onCtrl($scope.ctrl + 1);
}));
function $setup($scope) {
	$mutualA2($scope, $mutualA($scope));
	$cls($scope, class {
		m() {
			return $alias_getter($scope);
		}
	});
	$obj2($scope, { m: $obj });
	$ctrl($scope, 0, $onCtrl_getter($scope));
	$onCtrl2($scope, $onCtrl($scope));
	$setup__script($scope);
}
const $alias = ($scope) => {
	_assert_hoist($scope.cls);
};
const $mutualB = ($scope) => () => $scope.mutualA();
const $mutualA = ($scope) => () => $mutualB_getter($scope)();
function $obj() {
	return $alias_getter($scope);
}
const $onCtrl = ($scope) => (v) => {
	$ctrl($scope, v);
};
_resume("__tests__/template.marko_0/mutualB", $mutualB);
_resume("__tests__/template.marko_0/mutualA", $mutualA);
_resume("__tests__/template.marko_0/obj", $obj);
_resume("__tests__/template.marko_0/onCtrl", $onCtrl);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

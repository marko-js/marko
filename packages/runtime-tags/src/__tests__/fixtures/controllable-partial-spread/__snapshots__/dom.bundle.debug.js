// template.marko
const $template = "<button>inc</button><input><input><input>";
const $walks = " b b b b";
const $v__OR__rest__script = _script("__tests__/template.marko_0_v#4_rest#5", ($scope) => {
	_attrs_script($scope, "#input/1");
	_attrs_script($scope, "#input/2");
});
const $v__OR__rest = /*@__PURE__*/ _or(6, ($scope) => {
	_attrs($scope, "#input/1", {
		checkedValue: $scope.v,
		...$scope.rest
	}, _controllable_input);
	_attrs($scope, "#input/2", {
		...$scope.rest,
		checkedValue: $scope.v
	}, _controllable_input);
	$v__OR__rest__script($scope);
});
const $v = /*@__PURE__*/ _let("v/4", ($scope) => {
	_attr_input_value($scope, "#input/3", $scope.v, $valueChange($scope));
	$v__OR__rest($scope);
});
const $rest__script = _script("__tests__/template.marko_0_rest#5", ($scope) => _attrs_script($scope, "#input/3"));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	_attrs_partial($scope, "#input/3", $scope.rest, {
		value: 1,
		valueChange: 1
	});
	$v__OR__rest($scope);
	$rest__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$v($scope, $scope.v + "!");
	});
	_attr_input_value_script($scope, "#input/3");
});
function $setup($scope) {
	$v($scope, "a");
	$rest($scope, { placeholder: "p" });
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

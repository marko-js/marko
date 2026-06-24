// template.marko
const $template = "<input type=radio><!><input type=radio><span> </span><button>Toggle</button>";
const $walks = " b%b bD l b";
const $if_content__checkedValue__OR__$checkedValueChange = /*@__PURE__*/ _or(1, ($scope) => _attr_input_checkedValue($scope, "#input/0", $scope._.checkedValue, $scope._.$checkedValueChange, "b"));
const $if_content__checkedValue = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__checkedValue__OR__$checkedValueChange);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_checkedValue_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__checkedValue._($scope);
	$if_content__$checkedValueChange._($scope);
	$if_content__setup__script($scope);
};
const $if_content__$checkedValueChange = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__checkedValue__OR__$checkedValueChange);
const $if = /*@__PURE__*/ _if("#text/1", "<input type=radio>", " b", $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/4"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
const $checkedValue__OR__$checkedValueChange = /*@__PURE__*/ _or(8, ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.checkedValue, $scope.$checkedValueChange, "a");
	_attr_input_checkedValue($scope, "#input/2", $scope.checkedValue, $scope.$checkedValueChange, "c");
});
const $checkedValue = /*@__PURE__*/ _let("checkedValue/6", ($scope) => {
	_text($scope["#text/3"], $scope.checkedValue);
	$checkedValue__OR__$checkedValueChange($scope);
	$if_content__checkedValue($scope);
});
const $checkedValueChange3 = /*@__PURE__*/ _const("$checkedValueChange", $checkedValue__OR__$checkedValueChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/2");
});
function $setup($scope) {
	$show($scope, true);
	$checkedValue($scope, "a");
	$checkedValueChange3($scope, $checkedValueChange2($scope));
	$setup__script($scope);
}
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $for_content__checkedValue__OR__value = /*@__PURE__*/ _or(3, ($scope) => _attr_input_checkedValue($scope, "#input/0", $scope._.checkedValue, $checkedValueChange($scope), $scope.value));
const $for_content__checkedValue = /*@__PURE__*/ _for_closure("#text/0", $for_content__checkedValue__OR__value);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_checkedValue_script($scope, "#input/0"));
const $for_content__setup = ($scope) => {
	$for_content__checkedValue._($scope);
	$for_content__setup__script($scope);
};
const $for_content__value = /*@__PURE__*/ _const("value", $for_content__checkedValue__OR__value);
const $for_content__$params = ($scope, $params2) => $for_content__value($scope, $params2[0]);
const $checkedValue = /*@__PURE__*/ _let("checkedValue/2", ($scope) => {
	_text($scope["#text/1"], $scope.checkedValue);
	$for_content__checkedValue($scope);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<input type=checkbox>", " ", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$checkedValue($scope, ["a", "z"]);
	$for($scope, [["a", "b"]]);
}
const $checkedValueChange = ($scope) => (_new_checkedValue) => {
	$checkedValue($scope._, _new_checkedValue);
};
_resumed["__tests__/template.marko_1/checkedValueChange"] = $checkedValueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

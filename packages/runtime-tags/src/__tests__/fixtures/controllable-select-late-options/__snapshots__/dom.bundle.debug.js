// template.marko
const $template = "<select><!></select><div><!>:<!></div>";
const $walks = " D%lD%c%l";
const $for_content__o = ($scope, o) => {
	_attr($scope["#option/0"], "value", o);
	_text($scope["#text/1"], o);
};
const $for_content__$params = ($scope, $params3) => $for_content__o($scope, $params3[0]);
const $await_content__for = /*@__PURE__*/ _for_of("#text/0", "<option> </option>", " D ", 0, $for_content__$params);
const $await_content__opts = ($scope, opts) => $await_content__for($scope, [opts]);
const $await_content__$params = ($scope, $params2) => $await_content__opts($scope, $params2[0]);
const $v__OR__calls = /*@__PURE__*/ _or(6, ($scope) => _attr_select_value($scope, "#select/0", $scope.v, $valueChange($scope)));
const $v = /*@__PURE__*/ _let("v/4", ($scope) => {
	_text($scope["#text/2"], $scope.v);
	$v__OR__calls($scope);
});
const $calls = /*@__PURE__*/ _let("calls/5", ($scope) => {
	_text($scope["#text/3"], $scope.calls);
	$v__OR__calls($scope);
});
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/0"));
function $setup($scope) {
	$await_content($scope);
	$v($scope, "b");
	$calls($scope, 0);
	$await_promise($scope, resolveAfter([
		"a",
		"b",
		"c"
	]));
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(nv) {
		$calls($scope, $scope.calls + 1);
		$v($scope, nv);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

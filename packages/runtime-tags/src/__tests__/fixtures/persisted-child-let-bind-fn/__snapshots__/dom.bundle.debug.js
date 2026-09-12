// tags/picker.marko
const $template$1 = "<button>load</button><ul></ul>";
const $walks$1 = " b b";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $refreshing = /*@__PURE__*/ _fill_let_change("__tests__/tags/picker.marko0", "refreshing/7");
const $input_refreshing__OR__input_refreshingChange = /*@__PURE__*/ _or(6, ($scope) => $refreshing($scope, $scope.input_refreshing, $scope.input_refreshingChange));
const $input_refreshing = /*@__PURE__*/ _const("input_refreshing", $input_refreshing__OR__input_refreshingChange);
const $input_refreshingChange = /*@__PURE__*/ _const("input_refreshingChange", $input_refreshing__OR__input_refreshingChange);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li> </li>", "D ", 0, $for_content__$params);
const $catalog = /*@__PURE__*/ _fill_let("__tests__/tags/picker.marko1", "catalog/9", ($scope) => $for($scope, [$scope.catalog || []]));
const $load2 = /*@__PURE__*/ _const("load", ($scope) => _return($scope, $scope.load));
const $setup__script$1 = _script("__tests__/tags/picker.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.load(true);
}));
function $setup$1($scope) {
	$catalog($scope, null);
	$load2($scope, $load($scope));
	$setup__script$1($scope);
}
const $input = ($scope, input) => {
	$input_refreshing($scope, input.refreshing);
	$input_refreshingChange($scope, input.refreshingChange);
};
const $load = ($scope) => async (refresh) => {
	if (refresh) $refreshing($scope, true);
	$catalog($scope, ["a", "b"]);
	if (refresh) $refreshing($scope, false);
};
_resume("__tests__/tags/picker.marko_0/load", $load);
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button id=outer>outer</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1);
const $busy = /*@__PURE__*/ _let("busy/4", ($scope) => _text($scope["#text/2"], $scope.busy ? "busy" : "idle"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.refresh();
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $refresh);
	$setup$1($scope["#childScope/0"]);
	$input_refreshingChange($scope["#childScope/0"], $refreshingChange($scope));
	$input_refreshing($scope["#childScope/0"]);
	$busy($scope, false);
	$setup__script($scope);
}
const $refresh = _var_resume("__tests__/template.marko_0_refresh#5/var", /*@__PURE__*/ _const("refresh"));
const $refreshingChange = ($scope) => function(v) {
	$busy($scope, v);
};
_resume("__tests__/template.marko_0/refreshingChange", $refreshingChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

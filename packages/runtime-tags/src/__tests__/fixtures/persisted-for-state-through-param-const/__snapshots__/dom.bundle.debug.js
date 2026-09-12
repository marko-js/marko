// template.marko
const $template = "<button>load</button><!><!>";
const $walks = " b%c";
const $for_content__s_id = ($scope, s_id) => _text($scope["#text/0"], s_id);
const $for_content__$params = ($scope, $params2) => $for_content__s_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#text/1", "<div> </div>", "D ", 0, $for_content__$params);
const $input_active__OR__shown = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_active", /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.input_active ? $scope.shown : $scope.shown.slice(0, 1), "id"])));
const $shown = /*@__PURE__*/ _const("shown", $input_active__OR__shown);
const $sessions__OR__ws = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "ws", /*@__PURE__*/ _or(8, ($scope) => $shown($scope, $scope.ws ? $scope.sessions ?? $scope.ws?.sessions : [])));
const $sessions = /*@__PURE__*/ _let("sessions/6", $sessions__OR__ws);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$sessions($scope, [{ id: "c" }]);
}));
function $setup($scope) {
	$sessions($scope, null);
	$setup__script($scope);
}
const $ws = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "ws", $sessions__OR__ws);
const $input_workspace = $ws;
const $input_active = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_active", $input_active__OR__shown);
const $input = ($scope, input) => {
	$input_workspace($scope, input.workspace);
	$input_active($scope, input.active);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

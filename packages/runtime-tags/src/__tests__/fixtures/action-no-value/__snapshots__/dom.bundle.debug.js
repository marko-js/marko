// template.marko
const $template = "<button>go</button><p id=status> </p><p id=pending> </p>";
const $walks = " bD lD l";
const $apply = /*@__PURE__*/ _const("apply", ($scope) => $apply_pending($scope, $scope.apply?.pending));
const $apply_pending = /*@__PURE__*/ _let("apply_pending/4", ($scope) => _text($scope["#text/2"], String($scope.apply_pending)));
const $status = /*@__PURE__*/ _let("status/5", ($scope) => _text($scope["#text/1"], $scope.status));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", () => $scope.apply(resolveAfter("done")).then((value) => $status($scope, value))));
function $setup($scope) {
	$apply($scope, $value($scope));
	$status($scope, "idle");
	$setup__script($scope);
}
function $value($scope) {
	return _action($scope, "apply", $apply_pending, (act) => act);
}
_resume("__tests__/template.marko_0/value", $value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

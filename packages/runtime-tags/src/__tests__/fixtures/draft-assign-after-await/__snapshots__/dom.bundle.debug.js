// template.marko
const $template = "<button>save</button><p id=status> </p>";
const $walks = " bD l";
const $status = /*@__PURE__*/ _draft("status/3", ($scope) => _text($scope["#text/1"], $scope.status));
const $serverStatus = /*@__PURE__*/ _let("serverStatus/2", ($scope) => $status($scope, $scope.serverStatus));
const $save2__script = _script("__tests__/template.marko_0_save", ($scope) => _on($scope["#button/0"], "click", $scope.save));
const $save2 = /*@__PURE__*/ _const("save", ($scope) => {
	$save_pending($scope, $scope.save?.pending);
	$save2__script($scope);
});
function $setup($scope) {
	$serverStatus($scope, "saved");
	$save2($scope, $save($scope));
}
const $save_pending = /*@__PURE__*/ _let("save_pending/5", ($scope) => _attr($scope["#button/0"], "disabled", $scope.save_pending));
function $save($scope) {
	return _action($scope, "save", $save_pending, _action_async(function* () {
		$status.d($scope, "saving");
		yield resolveAfter(1, 1);
		$status.d($scope, "syncing");
		$serverStatus($scope, yield resolveAfter("saved again", 2));
	}));
}
_resume("__tests__/template.marko_0/save", $save);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

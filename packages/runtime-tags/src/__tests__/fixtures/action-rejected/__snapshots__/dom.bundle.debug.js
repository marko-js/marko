// template.marko
const $template = "<button>go</button><p id=draft> </p><p id=pending> </p>";
const $walks = " bD lD l";
const $save2 = /*@__PURE__*/ _const("save", ($scope) => $save_pending($scope, $scope.save?.pending));
const $count = /*@__PURE__*/ _draft("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$save2($scope, $save($scope));
});
const $serverCount = /*@__PURE__*/ _let("serverCount/3", ($scope) => $count($scope, $scope.serverCount));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", () => $scope.save().catch(() => {})));
function $setup($scope) {
	$serverCount($scope, 0);
	$setup__script($scope);
}
const $save_pending = /*@__PURE__*/ _let("save_pending/6", ($scope) => _text($scope["#text/2"], String($scope.save_pending)));
function $save($scope) {
	return _action($scope, "save", $save_pending, async () => {
		$count.d($scope, $scope.count + 1);
		$serverCount($scope, await rejectAfter(new Error("save failed")));
	});
}
_resume("__tests__/template.marko_0/save", $save);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

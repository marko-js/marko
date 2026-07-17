// template.marko
const $template = "<button>save</button>";
const $walks = " b";
const $save2__script = _script("__tests__/template.marko_0_save", ($scope) => _on($scope["#button/0"], "click", $scope.save));
const $save2 = /*@__PURE__*/ _const("save", ($scope) => {
	$save_pending($scope, $scope.save?.pending);
	$save2__script($scope);
});
const $save_pending = /*@__PURE__*/ _let("save_pending/2", ($scope) => _attr($scope["#button/0"], "disabled", $scope.save_pending));
function $setup($scope) {
	$save2($scope, $save($scope));
}
function $save($scope) {
	return _action($scope, "save", $save_pending, async () => {
		await resolveAfter(1);
	});
}
_resume("__tests__/template.marko_0/save", $save);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);

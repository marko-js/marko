// template.marko
const $template = "<button>before</button>";
const $walks = " b";
const updateText = $updateText;
const $onClick2__script = _script("__tests__/template.marko_0_onClick", ($scope) => _on($scope["#button/0"], "click", $scope.onClick));
const $onClick2 = /*@__PURE__*/ _const("onClick", $onClick2__script);
const $onClick3 = ($scope, $onClick = updateText) => $onClick2($scope, $onClick);
const $pattern2 = ($scope, $pattern) => $onClick3($scope, $pattern.onClick);
function $setup($scope) {
	$pattern2($scope, {});
}
function $updateText(ev) {
	ev.target.textContent = "after";
}
_resume("__tests__/template.marko_0/updateText", $updateText);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);

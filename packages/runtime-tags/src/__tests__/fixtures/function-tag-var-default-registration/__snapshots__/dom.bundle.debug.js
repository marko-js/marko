// template.marko
const $template = "<button>before</button>";
const $walks = " b";
const updateText = $updateText;
const $pattern2 = ($scope, $pattern) => $onClick2($scope, $pattern.onClick);
const $onClick3__script = _script("__tests__/template.marko_0_onClick", ($scope) => _on($scope["#button/0"], "click", $scope.onClick));
const $onClick3 = /*@__PURE__*/ _const("onClick", $onClick3__script);
const $onClick2 = ($scope, $onClick) => $onClick3($scope, void 0 !== $onClick ? $onClick : updateText);
function $setup($scope) {
	$pattern2($scope, {});
}
function $updateText(ev) {
	ev.target.textContent = "after";
}
_resume("__tests__/template.marko_0/updateText", $updateText);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);

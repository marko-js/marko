// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $d = /*@__PURE__*/ _fill_draft("__tests__/template.marko_fill0", "d/5", ($scope) => _text($scope["#text/1"], $scope.d));
const $input_x = $d;
const $hold2__script = _script("__tests__/template.marko_0_hold#7", ($scope) => _on($scope["#button/0"], "click", $scope.hold));
const $hold2 = _fill_resume("__tests__/template.marko_fill1", _action("hold/7", "__tests__/template.marko_0_hold#7/action", $hold2__script));
function $setup($scope) {
	$hold2($scope, $hold($scope));
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $hold = ($scope) => async () => {
	$d($scope, 5);
	await new Promise((resolve) => setTimeout(resolve, 600));
};
_resumed["__tests__/template.marko_0/hold"] = $hold;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

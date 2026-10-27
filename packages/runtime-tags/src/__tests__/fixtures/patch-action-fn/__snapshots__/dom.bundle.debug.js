// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = ($_) => {};
const $act2__script = _script("__tests__/template.marko_0_act#5", ($scope) => _on($scope["#button/0"], "click", $scope.act));
const $act2 = _fill_resume("__tests__/template.marko_fill0", _action("act/5", "__tests__/template.marko_0_act#5/action", $act2__script));
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => {
	_text($scope["#text/1"], $scope.input_x);
	$act2($scope, $act($scope));
});
const $input = ($scope, input) => $input_x($scope, input.x);
const $act = ($scope) => () => {
	document.title = String($scope.input_x);
};
_bind_resume("__tests__/template.marko_0/act input_x", $act);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

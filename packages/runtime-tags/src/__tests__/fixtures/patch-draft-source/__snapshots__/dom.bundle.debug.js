// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $d = /*@__PURE__*/ _fill_draft("__tests__/template.marko_fill0", "d/5", ($scope) => _text($scope["#text/1"], $scope.d));
const $input_x = $d;
const $set2__script = _script("__tests__/template.marko_0_set#7", ($scope) => _on($scope["#button/0"], "click", $scope.set));
const $set2 = _fill_resume("__tests__/template.marko_fill1", _action("set/7", "__tests__/template.marko_0_set#7/action", $set2__script));
function $setup($scope) {
	$set2($scope, $set($scope));
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $set = ($scope) => () => {
	$d($scope, 9);
};
_resumed["__tests__/template.marko_0/set"] = $set;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

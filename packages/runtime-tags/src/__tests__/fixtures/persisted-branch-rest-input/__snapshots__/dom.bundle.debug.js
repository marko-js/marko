// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if = /*@__PURE__*/ _if("#text/2", "<span>shown</span>");
const $input_show__OR__on = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_show", /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.input_show && $scope.on ? 0 : 1)));
const $on = /*@__PURE__*/ _let("on/7", $input_show__OR__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $label = ($scope, label) => _text($scope["#text/1"], label);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $input_show__OR__on);
const $input = ($scope, input) => {
	$label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

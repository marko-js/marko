// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_a__OR__$global_g = /*@__PURE__*/ _fill_global_join("g", "__tests__/template.marko_1_input_a#0:5_$global_g#2", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_a", ($scope) => _text($scope["#text/0"], $scope._.input_a + _global_read($scope.$global, "g")), "#text/2", 0));
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__input_a__OR__$global_g);
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/2", "<p>t:<!></p>", "Db%", $if_content__setup);
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "s/6", ($scope) => {
	_text($scope["#text/1"], $scope.s);
	$if($scope, $scope.s % 2 === 1 ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$s($scope, 0);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

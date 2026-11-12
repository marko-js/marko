// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $global_g_key = /*@__PURE__*/ _global_key("g");
const $if_content__$global_g = /*@__PURE__*/ _global_if($global_g_key, "#text/2", 0, "__tests__/template.marko_1_$global_g#0:9/subscribe");
const $if_content__input_a__OR__$global_g = /*@__PURE__*/ _global_or(($scope) => _text($scope["#text/0"], $scope._.input_a + _global_read($scope.$global, "g")), $if_content__$global_g);
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_a#0:5/setup", "#text/2", 0, $if_content__input_a__OR__$global_g);
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/2", "<p>t:<!></p>", "Db%", $if_content__setup);
const $s = _let("s/6", ($scope) => {
	_text($scope["#text/1"], $scope.s);
	$if($scope, $scope.s % 2 === 1 ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

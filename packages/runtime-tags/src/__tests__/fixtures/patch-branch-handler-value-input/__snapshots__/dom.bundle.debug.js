// template.marko
const $template = "<button class=toggle>toggle</button><!><output> </output>";
const $walks = " b%bD l";
const $if_content__input_mode__script = _script("__tests__/template.marko_1_input_mode#0:5", ($scope) => _on($scope["#button/0"], "click", $scope._.input_mode === "a" ? function() {
	$out($scope._, "A");
} : function() {
	$out($scope._, "B");
}));
const $if_content__input_mode = /*@__PURE__*/ _fill_signal("input_mode __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_mode__script));
const $if_content__setup = $if_content__input_mode;
const $if = /*@__PURE__*/ _if("#text/1", "<button class=go>go</button>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $out = /*@__PURE__*/ _let("out/7", ($scope) => _text($scope["#text/2"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$out($scope, "-");
	$setup__script($scope);
}
const $input = ($scope, input) => $input_mode($scope, input.mode);
const $input_mode = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_mode", $if_content__input_mode);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

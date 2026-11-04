// template.marko
const $template = "<button class=x> </button><!><!>";
const $walks = " D l%c";
const $if_content__b = _let("b/2", ($scope) => _text($scope["#text/0"], $scope.b));
const $if_content__s = _let("s/1", ($scope) => $if_content__b($scope, $scope.s));
const $if_content__x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_x#0:6/setup", "#text/2", 0, ($scope) => $if_content__s($scope, $scope._.x));
const $if_content__setup = $if_content__x;
const $x = _let("x/6", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$if_content__x($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

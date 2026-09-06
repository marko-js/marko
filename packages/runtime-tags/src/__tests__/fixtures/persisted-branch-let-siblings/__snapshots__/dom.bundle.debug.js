// template.marko
const $template = "<main><h1> </h1><!><!></main>";
const $walks = "E l%b%l";
const $setup = () => {};
const $if_content2__y = /*@__PURE__*/ _fill_let("__tests__/template.marko1", "y/2", ($scope) => _text($scope["#text/0"], $scope.y));
const $if_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content2__y($scope, +$scope.y + 1);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__y($scope, 10);
	$if_content2__setup__script($scope);
};
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "x/2", ($scope) => _text($scope["#text/0"], $scope.x));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__x($scope, +$scope.x + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__x($scope, 0);
	$if_content__setup__script($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p class=pa>A <!></p><button class=ba>+</button>", "Db%l ", $if_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $if2 = /*@__PURE__*/ _if("#text/2", "<p class=pb>B <!></p><button class=bb>+</button>", "Db%l ", $if_content2__setup);
const $input_b = ($scope, input_b) => $if2($scope, input_b ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// template.marko
const $template = "<div><h1> </h1><button class=root>+</button><!></div>";
const $walks = "E l b%l";
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko1", "n/2", ($scope) => _text($scope["#text/0"], $scope.n));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__n($scope, $scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $input_title__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/0"], $scope.input_title + " #" + $scope.count)));
const $count = /*@__PURE__*/ _let("count/7", $input_title__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__OR__count);
const $if = /*@__PURE__*/ _if("#text/2", "<p>Seen <!></p><button class=inner>+</button>", "Db%l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

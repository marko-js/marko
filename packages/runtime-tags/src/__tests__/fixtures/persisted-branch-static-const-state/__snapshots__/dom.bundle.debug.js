// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__count__OR__alias = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "base", /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/0"], $scope.base + $scope._.count)));
const $if_content__count = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_count#5/init", "#text/0", 0, $if_content__count__OR__alias);
const $if_content__base = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "base", $if_content__count__OR__alias);
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__base($scope, 10 * 2);
};
const $count = /*@__PURE__*/ _let("count/5", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

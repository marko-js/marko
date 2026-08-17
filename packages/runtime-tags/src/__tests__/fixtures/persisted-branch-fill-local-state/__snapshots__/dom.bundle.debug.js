// template.marko
const $template = "<main><!><em> </em><button id=c>+</button></main>";
const $walks = "D%bD l l";
const $if_content__input_title__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "n", /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_title", /*@__PURE__*/ _init_join("__tests__/template.marko_1_input_title#6/init", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.input_title + "@" + $scope.n))), "#text/0", 0));
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_title__OR__n);
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko1", "n/2", $if_content__input_title__OR__n);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__n($scope, +$scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><button id=n>n</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

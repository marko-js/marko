// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__count__OR__n__script = _script("__tests__/template.marko_1_count#0:5_n#2", ($scope) => console.log(`effect ${$scope.n + $scope._.count}`));
const $if_content__count__OR__n = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_count#0:5_n#2/init", 3, $if_content__count__OR__n__script);
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$if_content__count__OR__n($scope);
}));
const $if_content__n = _let("n/2", ($scope) => {
	$if_content__count__OR__n($scope);
	_text($scope["#text/0"], $scope.n);
});
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__n($scope, 0);
};
const $count = _let("count/5", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

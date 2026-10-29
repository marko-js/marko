// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_w = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_w)));
const $if_content__setup = $if_content__input_w;
const $if = /*@__PURE__*/ _if("#text/2", "<p> </p>", "D ", $if_content__setup);
const $show__OR__n = /*@__PURE__*/ _or(9, ($scope) => $if($scope, $scope.show && $scope.n < 2 ? 0 : 1));
const $show = /*@__PURE__*/ _let("show/7", $show__OR__n);
const $input_show = $show;
const $n = /*@__PURE__*/ _let("n/8", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$show__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_w($scope, input.w);
};
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

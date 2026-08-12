// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__pick = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "pick", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.pick())));
const $if_content__setup = $if_content__pick;
const $pick = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "pick", $if_content__pick);
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $pick($scope, $scope.input_upper ? $scope.up : $scope.low), 2);
const $up2 = /*@__PURE__*/ _const("up", $input_upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", $input_upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input_upper = /*@__PURE__*/ _const("input_upper", $input_upper__OR__up__OR__low);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/10", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_upper($scope, input.upper);
};
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resume("__tests__/template.marko_0/up", $up);
_resume("__tests__/template.marko_0/low", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

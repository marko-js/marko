// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $B_content = _content("__tests__/template.marko_2*content", "<b>B</b>");
const $A_content__l = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "l/5", ($scope) => _text($scope["#text/1"], $scope.l));
const $A_content__x = ($scope, x) => $A_content__l($scope, String(x));
const $A_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$A_content__l($scope, $scope.l + "+");
}));
const $A_content__setup = $A_content__setup__script;
const $A_content__$params = ($scope, $params2) => $A_content__x($scope, $params2[0].x);
const $A_content = _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $A_content__setup, $A_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_flag__OR__input_a__OR__A__OR__B = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_flag ? $scope.B : $scope.A, ($_) => ({ x: $scope.input_a })), 3);
const $A = /*@__PURE__*/ _const("A", $input_flag__OR__input_a__OR__A__OR__B);
const $B = /*@__PURE__*/ _const("B", $input_flag__OR__input_a__OR__A__OR__B);
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_a__OR__A__OR__B);
const $input_a = /*@__PURE__*/ _const("input_a", $input_flag__OR__input_a__OR__A__OR__B);
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_a($scope, input.a);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

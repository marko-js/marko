// template.marko
const $template = "<div></div>";
const $walks = " b";
const $Frag_content__$params = ($scope, $params2) => _text($scope["#text/0"], typeof $params2[0]);
const $Frag_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", 0, $Frag_content__$params);
const $input_show__OR__Frag = /*@__PURE__*/ _or(5, ($scope) => _attr_content($scope, "#div/0", $scope.input_show ? $scope.Frag : undefined));
const $Frag = /*@__PURE__*/ _const("Frag", $input_show__OR__Frag);
function $setup($scope) {
	$Frag($scope, { content: $Frag_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__Frag);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);

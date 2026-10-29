// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Body_content__input_w = /*@__PURE__*/ _closure_get("input_w/8", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:3/subscribe");
const $Body_content__setup = $Body_content__input_w;
const $Body_content = _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $Body_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $view = /*@__PURE__*/ _let("view/7", ($scope) => $dynamicTag($scope, $scope.view));
const $input_show__OR__Body = /*@__PURE__*/ _or(6, ($scope) => $view($scope, $scope.input_show ? $scope.Body : null));
const $Body = /*@__PURE__*/ _const("Body", $input_show__OR__Body);
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__Body);
const $input = ($scope, input) => {
	$input_w($scope, input.w);
	$input_show($scope, input.show);
};
const $input_w__closure = /*@__PURE__*/ _closure($Body_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

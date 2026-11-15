// template.marko
const $Box_content2__walks = "b%c";
const $Box_content2__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content2__walks);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $Box_content2__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $Box_content2__open = ($scope, open) => $Box_content2__if($scope, open ? 0 : 1);
const $Box_content2__tag_input_content = /*@__PURE__*/ _const("content", $if_content__content);
const $Box_content2__$params = ($scope, $params2) => $Box_content2__$temp($scope, $params2[0]);
const $Box_content2__$temp = ($scope, $temp) => {
	$Box_content2__open($scope, $temp.open);
	$Box_content2__tag_input_content($scope, $temp.content);
};
const $Box_content__input_a = /*@__PURE__*/ _closure_get("input_a/6", ($scope) => _text($scope["#text/0"], $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:4/subscribe");
const $Box_content__setup = ($scope) => {
	$Box_content__input_a($scope);
	$Box_content__input_b($scope);
};
const $Box_content__input_b = /*@__PURE__*/ _closure_get("input_b/7", ($scope) => _text($scope["#text/1"], $scope._.input_b), 0, "__tests__/template.marko_1_input_b#0:5/subscribe");
const $Box_content = _content_resume("__tests__/template.marko_1*content", "<!> <!>", "%c%", $Box_content__setup);
function $setup($scope) {
	$Box_content2__tag_input_content($scope["#childScope/0"], $Box_content($scope));
}
const $input_open = ($scope, input_open) => $Box_content2__open($scope["#childScope/0"], input_open);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($Box_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($Box_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

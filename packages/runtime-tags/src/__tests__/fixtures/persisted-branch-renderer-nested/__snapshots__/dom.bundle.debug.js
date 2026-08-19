// tags/widget/index.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = () => {};
const $input_renderer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_renderer = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_renderer($scope, input.renderer);
};
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content2__input_tag = /*@__PURE__*/ _closure_get("input_tag", ($scope) => $input_renderer($scope["#childScope/0"], $scope._._.input_tag), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__input_tag($scope);
	$input_label($scope["#childScope/0"]);
};
const $if_content__if = /*@__PURE__*/ _if("#div/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content2__setup);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__if($scope, $scope._.input_b ? 0 : 1));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if("#main/0", "<div></div>", " ", $if_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_tag($scope, input.tag);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
const $input_tag__closure = /*@__PURE__*/ _closure($if_content2__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

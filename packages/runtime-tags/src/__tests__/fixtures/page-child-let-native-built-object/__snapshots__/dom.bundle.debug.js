// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $objT_content__input_label = /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/outer.marko_1_input_label#0:4/subscribe");
const $objT_content__setup = $objT_content__input_label;
const $objT_content = _content("__tests__/tags/outer.marko_1*content", " ", " ", $objT_content__setup);
_content_resume($objT_content);
const $obj = ($scope, obj) => $obj_T($scope, obj.T);
const $T = /*@__PURE__*/ _let("T/5", ($scope) => $obj($scope, { T: $scope.T }));
const $input_tag$1 = $T;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $objT_content);
const $input_label__OR__obj_T = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.obj_T, ($_) => ({ title: $scope.input_label })));
const $obj_T = /*@__PURE__*/ _const("obj_T", $input_label__OR__obj_T);
const $input_label__closure = /*@__PURE__*/ _closure($objT_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__obj_T($scope);
	$input_label__closure($scope);
});
const $input$1 = ($scope, input) => {
	$input_tag$1($scope, input.tag);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], input_tag);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

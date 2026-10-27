// tags/toggle.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/toggle.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_content$1($scope, input.content);
};
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle.marko_fill0", "input_content", $if_content__input_content);
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$2, "b%c", 0, $input$2);

// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $toggle_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_label#1:1/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _closure_get("label/8", ($scope) => _text($scope["#text/0"], $scope._.label), 0, "__tests__/template.marko_2_label#1:1/subscribe"), 0));
const $toggle_content__setup = $toggle_content__label;
const $toggle_content = _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $toggle_content__setup);
const $wrapper_content__label__closure = /*@__PURE__*/ _closure($toggle_content__label);
const $wrapper_content__label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "label", $wrapper_content__label__closure);
const $wrapper_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => $wrapper_content__label($scope, $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe"));
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$wrapper_content__open($scope);
	$input_content$1($scope["#childScope/0"], $toggle_content($scope));
};
const $wrapper_content__open = /*@__PURE__*/ _closure_get("open/7", ($scope) => $input_open($scope["#childScope/0"], $scope._.open), 0, "__tests__/template.marko_1_open#0:5/subscribe");
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $wrapper_content__setup);
const $open__closure = /*@__PURE__*/ _closure($wrapper_content__open);
const $open = /*@__PURE__*/ _let("open/5", $open__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

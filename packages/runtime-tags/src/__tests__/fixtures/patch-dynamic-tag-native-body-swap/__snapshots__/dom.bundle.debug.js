// outer.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/outer.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $inputwrapouterdiv_content__input_x = /*@__PURE__*/ _closure_get("input_x", ($scope) => _text($scope["#text/0"], $scope._.input_x));
const $inputwrapouterdiv_content__setup = $inputwrapouterdiv_content__input_x;
const $inputwrapouterdiv_content = _content_resume("__tests__/template.marko_1*content", "body <!>", "b%", $inputwrapouterdiv_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputwrapouterdiv_content);
const $input_wrap = ($scope, input_wrap) => $dynamicTag($scope, input_wrap ? outer_default : "div");
const $input = ($scope, input) => {
	$input_wrap($scope, input.wrap);
	$input_x($scope, input.x);
};
const $input_x__closure = /*@__PURE__*/ _closure($inputwrapouterdiv_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// box-a.marko
const $template$2 = "<div class=a><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$2;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var box_a_default = /*@__PURE__*/ _template("__tests__/box-a.marko", $template$2, "D%l", 0, $input$2);

// box-b.marko
const $template$1 = "<p class=b><!></p>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_b_default = /*@__PURE__*/ _template("__tests__/box-b.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const $inputmodeaboxAboxB_content__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/0"], $scope._.input_text));
const $inputmodeaboxAboxB_content__setup = $inputmodeaboxAboxB_content__input_text;
const $inputmodeaboxAboxB_content = _content_resume("__tests__/template.marko_1*content", " ", " ", $inputmodeaboxAboxB_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputmodeaboxAboxB_content);
const $input_mode = ($scope, input_mode) => $dynamicTag($scope, input_mode === "a" ? box_a_default : box_b_default);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_text($scope, input.text);
};
const $input_text__closure = /*@__PURE__*/ _closure($inputmodeaboxAboxB_content__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

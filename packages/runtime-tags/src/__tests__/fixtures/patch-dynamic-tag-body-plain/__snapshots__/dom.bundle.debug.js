// tags/plain.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputonPlaindiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $inputonPlaindiv_content__setup = $inputonPlaindiv_content__input_note;
const $inputonPlaindiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonPlaindiv_content__setup);
_content_resume($inputonPlaindiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonPlaindiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? plain_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonPlaindiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

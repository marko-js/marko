// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card/index.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_signal("input_content __tests__/tags/card/index.marko_fill0", /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card/index.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
let $load_Box_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:box.marko.setup.mjs"));
let $load_Box_tag_input_content = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:box.marko.input_content.mjs"), "ready:__tests__/box.marko");
const $Box_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe"), 0));
const $Box_content__setup = $Box_content__input_note;
const $Box_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $Box_content__setup);
const $card_content__setup = ($scope) => {
	$load_Box_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Box_tag_input_content($scope["#childScope/1"], $Box_content($scope));
};
const $card_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%/&", $card_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($Box_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// box.marko
const $template = "<div><!></div>";
const $walks = "D%l";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/box.marko", $template, "D%l", 0, $input);

// v:box.marko.setup.js
const _ = [
	$template,
	"D%l",
	$setup
];

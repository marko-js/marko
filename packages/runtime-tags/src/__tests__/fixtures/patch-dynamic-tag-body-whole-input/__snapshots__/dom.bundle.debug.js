// tags/show-header.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = ($_) => {};
const $input_header_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_header$2 = $dynamicTag$2;
const $input$3 = ($scope, input) => $input_header$2($scope, input.header);
var show_header_default = /*@__PURE__*/ _template("__tests__/tags/show-header.marko", $template$3, "b%c", 0, $input$3);

// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__input_header = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill1", "input_header", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_header$2($scope["#childScope/0"], $scope._.input_header)));
const $if_content__setup = $if_content__input_header;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "open/4", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$2 = ($scope, input) => $input_header$1($scope, input.header);
const $input_header$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill1", "input_header", $if_content__input_header);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/plain.marko
const $template$1 = "<span><!></span>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_header_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_header = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_header($scope, input.header);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $H_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:3/subscribe"), 0));
const $H_content__setup = $H_content__input_note;
const $H_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $H_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__H = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : plain_default, ($_) => ({ header: $scope.H })));
const $H = /*@__PURE__*/ _const("H", $input_on__OR__H);
function $setup($scope) {
	$H($scope, { content: $H_content($scope) });
}
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__H);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($H_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);

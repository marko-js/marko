// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content, ($_) => ({ class: "x" }))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $input$2 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/holder.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $frag_content = _content("__tests__/tags/holder.marko_1*content", "<em>held</em>");
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_resume("__tests__/tags/holder.marko_0_input_mode#3_frag_content#5/init", 6, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode$1 = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $input$1 = ($scope, input) => $input_mode$1($scope, input.mode);
var holder_default = /*@__PURE__*/ _template("__tests__/tags/holder.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<main><!></main><button class=m>m</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D%l b`)(" b");
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:7/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/10", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:7/subscribe"), 0));
const $inputonCarddiv_content__setup = $inputonCarddiv_content__input_note;
const $inputonCarddiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $input_mode__OR__m = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_mode", /*@__PURE__*/ _or(9, ($scope) => $input_mode$1($scope["#childScope/0"], $scope.m || $scope.input_mode)));
const $m = _let("m/8", $input_mode__OR__m);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$m($scope, !$scope.m);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$m($scope, false);
	$setup__script($scope);
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__m);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputonCarddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? card_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_mode($scope, input.mode);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

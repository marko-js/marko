// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/card.marko_1_input_content#0:4/setup", "#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_open#5/fill", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Note_content__walks = "D l";
const $Note_content__template = "<em> </em>";
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($Note_content__template, $Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)($Note_content__walks, $Wrap_content__walks);
const $inputonCarddiv_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$Note_content__setup($scope["#childScope/0"]);
};
const $inputonCarddiv_content = _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Note_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Note_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $Wrap_content__input_on = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_on#0:5/subscribe", "input_on/7", ($scope) => $Wrap_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"));
const $Wrap_content__setup = $Wrap_content__input_on;
const $Note_content__input_note = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_note#0:4/subscribe", "input_note/6", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_0_input_note#4/subscribers", 0);
const $Note_content__setup = $Note_content__input_note;
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Note_content__setup($scope["#childScope/0"]);
	$scope["#childScope/1"]._ = $scope;
	$Wrap_content__setup($scope["#childScope/1"]);
}
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_on($scope, input.on);
};
const $input_note__closure = /*@__PURE__*/ _closure($Note_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
const $input_on__closure = /*@__PURE__*/ _closure($Wrap_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

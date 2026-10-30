// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Note_content__walks = "b%c";
const $Note_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputonCarddiv_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Note_content__setup($scope["#childScope/0"]);
	$Note_content__tag_input_label($scope["#childScope/0"], "x");
};
const $inputonCarddiv_content = _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Note_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Note_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__input_note = /*@__PURE__*/ _closure_get("input_note/6", ($scope) => _text($scope["#text/1"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_note($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $Note_content__if = /*@__PURE__*/ _if("#text/0", "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Note_content__input_on = /*@__PURE__*/ _closure_get("input_on/5", ($scope) => $Note_content__if($scope, $scope._.input_on ? 0 : 1), 0, "__tests__/template.marko_1_input_on#0:3/subscribe");
const $Note_content__setup = $Note_content__input_on;
const $Note_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Note_content__$params = ($scope, $params2) => $Note_content__$temp($scope, $params2[0]);
const $Note_content__$temp = ($scope, $temp) => $Note_content__tag_input_label($scope, $temp.label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $input_on__closure = /*@__PURE__*/ _closure($Note_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", ($scope) => {
	$dynamicTag($scope, $scope.input_on ? card_default : "div");
	$input_on__closure($scope);
});
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($if_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

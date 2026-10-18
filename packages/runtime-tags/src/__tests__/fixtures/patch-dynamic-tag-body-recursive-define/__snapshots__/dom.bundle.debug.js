// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Tree_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Tree_content__walks);
const $inputonCarddiv_content__depth = /*@__PURE__*/ _closure_get("depth/7", ($scope) => $Tree_content__tag_input_depth($scope["#childScope/0"], $scope._._.depth - 1), ($scope) => $scope._._, "__tests__/template.marko_3_depth#1:4/subscribe");
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__depth($scope);
	$scope["#childScope/0"]._ = $scope._._._;
	$Tree_content__setup($scope["#childScope/0"]);
};
const $inputonCarddiv_content = _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $if_content__input_on = _closure_resume("__tests__/template.marko_2_input_on#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_on", /*@__PURE__*/ _closure_get("input_on/6", ($scope) => $if_content__dynamicTag($scope, $scope._._.input_on ? card_default : "div"), ($scope) => $scope._._), 0));
const $if_content__setup = $if_content__input_on;
const $Tree_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:3/subscribe"), 0);
const $Tree_content__setup = $Tree_content__input_note;
const $Tree_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Tree_content__tag_input_depth__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__depth);
const $Tree_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$Tree_content__tag_input_depth__closure($scope);
	$Tree_content__if($scope, $scope.depth ? 0 : 1);
});
const $Tree_content__$params = ($scope, $params2) => $Tree_content__$temp($scope, $params2[0]);
const $Tree_content__$temp = ($scope, $temp) => $Tree_content__tag_input_depth($scope, $temp.depth);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Tree_content__setup($scope["#childScope/0"]);
	$Tree_content__tag_input_depth($scope["#childScope/0"], 1);
}
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_on($scope, input.on);
};
const $input_note__closure = /*@__PURE__*/ _closure($Tree_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
const $input_on__closure = /*@__PURE__*/ _closure($if_content__input_on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
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
const $template = "<main><!></main>";
const $walks = "D%l";
const $inputinnerCardsection_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_note#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "input_note", /*@__PURE__*/ _closure_get("input_note/11", ($scope) => _text($scope["#text/0"], $scope._._._._.input_note), ($scope) => $scope._._._._, "__tests__/template.marko_4_input_note#0:7/subscribe"), 0));
const $inputinnerCardsection_content__setup = ($scope) => {
	$inputinnerCardsection_content__input_note($scope);
	$inputinnerCardsection_content__w($scope);
};
const $inputinnerCardsection_content__w = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_w#3:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill3", "w", /*@__PURE__*/ _closure_get("w/12", ($scope) => _text($scope["#text/1"], $scope._.w), 0, "__tests__/template.marko_4_w#3:3/subscribe"), 0));
const $inputinnerCardsection_content = _content("__tests__/template.marko_4*content", "<em><!> <!></em>", "D%c%", $inputinnerCardsection_content__setup);
_content_resume($inputinnerCardsection_content);
const $await_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputinnerCardsection_content);
const $await_content2__input_inner = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_inner#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_inner", /*@__PURE__*/ _closure_get("input_inner/10", ($scope) => $await_content2__dynamicTag($scope, $scope._._._.input_inner ? card_default : "section"), ($scope) => $scope._._._, "__tests__/template.marko_3_input_inner#0:6/subscribe"), 0));
const $await_content2__setup = $await_content2__input_inner;
const $await_content2__w__closure = /*@__PURE__*/ _closure($inputinnerCardsection_content__w);
const $await_content2__w__script = _script("__tests__/template.marko_3_w#3", ($scope) => console.log("w", $scope.w));
const $await_content2__w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "w", ($scope) => {
	$await_content2__w__closure($scope);
	_text($scope["#text/0"], $scope.w);
	$await_content2__w__script($scope);
}, /*@__PURE__*/ _fill_mark("w", $await_content2__w__closure));
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b> </b><!><!>", "D l%", $await_content2__setup);
const $inputouterCarddiv_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $inputouterCarddiv_content__input_w = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_w#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/9", ($scope) => $inputouterCarddiv_content__await_promise($scope, $scope._._.input_w), ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:5/subscribe"), 0));
const $inputouterCarddiv_content__setup = ($scope) => {
	$inputouterCarddiv_content__input_w($scope);
	$await_content2($scope);
};
const $inputouterCarddiv_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $inputouterCarddiv_content__setup);
_content_resume($inputouterCarddiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputouterCarddiv_content);
const $await_content__input_outer = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_outer#0:4/init", /*@__PURE__*/ _closure_get("input_outer/8", ($scope) => $await_content__dynamicTag($scope, $scope._.input_outer ? card_default : "div"), 0, "__tests__/template.marko_1_input_outer#0:4/subscribe"));
const $await_content__setup = $await_content__input_outer;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup = $await_content;
const $input_v = $await_promise;
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_outer($scope, input.outer);
	$input_w($scope, input.w);
	$input_inner($scope, input.inner);
	$input_note($scope, input.note);
};
const $input_outer__closure = /*@__PURE__*/ _closure($await_content__input_outer);
const $input_outer = /*@__PURE__*/ _const("input_outer", $input_outer__closure);
const $input_w__closure = /*@__PURE__*/ _closure($inputouterCarddiv_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($await_content2__input_inner);
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_inner", $input_inner__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputinnerCardsection_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);

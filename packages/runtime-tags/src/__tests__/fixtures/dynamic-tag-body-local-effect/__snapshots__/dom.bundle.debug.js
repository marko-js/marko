// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
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
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $inputonCarddiv_content__x = /*@__PURE__*/ _closure_get("x/8", ($scope) => _text($scope["#text/0"], $scope._.x), 0, "__tests__/template.marko_2_x#1:2/subscribe");
const $inputonCarddiv_content__setup = $inputonCarddiv_content__x;
const $inputonCarddiv_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__x__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__x);
const $if_content__x__script = _script("__tests__/template.marko_1_x#2", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.x);
const $if_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$if_content__x__closure($scope);
	$if_content__x__script($scope);
});
const $if_content__input_note = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__x($scope, $scope._.input_note + "!"));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_on._($scope);
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputonCarddiv_content);
const $if_content__input_on = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"));
const $if = /*@__PURE__*/ _if("#main/0", "<div></div><!><!>", " b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
	$input_on($scope, input.on);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
const $input_on = /*@__PURE__*/ _const("input_on", $if_content__input_on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

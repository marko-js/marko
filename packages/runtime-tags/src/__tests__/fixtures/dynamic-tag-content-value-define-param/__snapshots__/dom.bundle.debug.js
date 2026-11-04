// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
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
const $Outer_content__walks = "b%c";
const $Outer_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks);
const $Label_content__v = /*@__PURE__*/ _closure_get("v/6", ($scope) => _text($scope["#text/0"], $scope._.v), 0, "__tests__/template.marko_2_v#1:3/subscribe");
const $Label_content__setup = $Label_content__v;
const $Label_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $Label_content__setup);
_content_resume($Label_content);
const $Outer_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Outer_content__input_on__OR__Label = /*@__PURE__*/ _or(5, ($scope) => $Outer_content__dynamicTag($scope, $scope._.input_on ? card_default : "div", ($_) => ({ content: $scope.Label })));
const $Outer_content__input_on = /*@__PURE__*/ _closure_get("input_on/5", $Outer_content__input_on__OR__Label, 0, "__tests__/template.marko_1_input_on#0:3/subscribe");
const $Outer_content__Label = /*@__PURE__*/ _const("Label", $Outer_content__input_on__OR__Label);
const $Outer_content__setup = ($scope) => {
	$Outer_content__input_on($scope);
	$Outer_content__Label($scope, { content: $Label_content($scope) });
};
const $Outer_content__tag_input_v__closure = /*@__PURE__*/ _closure($Label_content__v);
const $Outer_content__tag_input_v = /*@__PURE__*/ _const("v", $Outer_content__tag_input_v__closure);
const $Outer_content__$params = ($scope, $params2) => $Outer_content__$temp($scope, $params2[0]);
const $Outer_content__$temp = ($scope, $temp) => $Outer_content__tag_input_v($scope, $temp.v);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Outer_content__setup($scope["#childScope/0"]);
}
const $input_note = ($scope, input_note) => $Outer_content__tag_input_v($scope["#childScope/0"], input_note);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_on__closure = /*@__PURE__*/ _closure($Outer_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

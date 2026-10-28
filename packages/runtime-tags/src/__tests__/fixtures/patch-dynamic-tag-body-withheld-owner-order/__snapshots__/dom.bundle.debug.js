// tags/keeper.marko
const $template$2 = "<button class=toggle>t</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/keeper.marko_fill0", "input_content", $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/plain.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $D_content__walks = "b%b%c";
const $D_content__template = "<!><!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks);
const $X_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_label#1:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _closure_get("label/10", ($scope) => _text($scope["#text/0"], $scope._.label), 0, "__tests__/template.marko_2_label#1:4/subscribe"), 0));
const $X_content__setup = $X_content__label;
const $X_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $X_content__setup);
const $D_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $D_content__input_on__OR__X = /*@__PURE__*/ _or(8, ($scope) => $D_content__dynamicTag($scope, $scope._.input_on ? keeper_default : plain_default, ($_) => ({ content: $scope.X })));
const $D_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $D_content__input_on__OR__prev = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_on#0:5_prev#5/init", 6, ($scope) => $D_content__dynamicTag2($scope, $scope._.input_on ? keeper_default : plain_default, ($_) => ({ content: $scope.prev })));
const $D_content__input_on = /*@__PURE__*/ _closure_get("input_on/9", ($scope) => {
	$D_content__input_on__OR__X($scope);
	$D_content__input_on__OR__prev($scope);
}, 0, "__tests__/template.marko_1_input_on#0:5/subscribe");
const $D_content__X = /*@__PURE__*/ _const("X", ($scope) => {
	_return($scope, $scope.X);
	$D_content__input_on__OR__X($scope);
});
const $D_content__setup = ($scope) => {
	$D_content__input_on($scope);
	$D_content__X($scope, { content: $X_content($scope) });
};
const $D_content__prev = /*@__PURE__*/ _const("prev", $D_content__input_on__OR__prev);
const $D_content__tag_input_label__closure = /*@__PURE__*/ _closure($X_content__label);
const $D_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "label", $D_content__tag_input_label__closure);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => {
	$D_content__tag_input_label($scope, $temp.label);
	$D_content__prev($scope, $temp.prev);
};
const $first = _var_resume("__tests__/template.marko_0_first#8/var", ($scope, first) => $D_content__prev($scope["#childScope/2"], first));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$D_content__prev($scope["#childScope/0"]);
	$scope["#childScope/2"]._ = $scope;
	$D_content__setup($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $first);
}
const $input_a = ($scope, input_a) => $D_content__tag_input_label($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $D_content__tag_input_label($scope["#childScope/2"], input_b);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_on__closure = /*@__PURE__*/ _closure($D_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

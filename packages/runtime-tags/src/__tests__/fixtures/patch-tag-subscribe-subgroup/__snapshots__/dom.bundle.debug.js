// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_tally = ($scope, input_tally) => $input_tally$1($scope["#childScope/0"], input_tally);
const $input_type = ($scope, input_type) => $input_type$1($scope["#childScope/0"], input_type);
const $input_settled = ($scope, input_settled) => $input_settled$1($scope["#childScope/0"], input_settled);
const $input = ($scope, input) => {
	$input_tally($scope, input.tally);
	$input_type($scope, input.type);
	$input_settled($scope, input.settled);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/plain-let.marko
const $template$1 = "";
const $walks$1 = "";
const $value = /*@__PURE__*/ _fill_let("__tests__/tags/plain-let.marko_fill0", "value/3", ($scope) => _return($scope, $scope.value));
const $input_value = $value;
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
}
const $input$1 = ($scope, input) => $input_value($scope, input.value);
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed["__tests__/tags/plain-let.marko_0/valueChange"] = $valueChange;
var plain_let_default = /*@__PURE__*/ _template("__tests__/tags/plain-let.marko", "", "", /*@__PURE__*/ _return_setup($setup$1), $input$1);

// tags/row-list.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $if_content__input_settled__OR__bounty__OR__t = /*@__PURE__*/ _fill_if("__tests__/tags/row-list.marko_fill2", "t", /*@__PURE__*/ _fill("__tests__/tags/row-list.marko_fill1", "input_settled", /*@__PURE__*/ _or_resume("__tests__/tags/row-list.marko_2_input_settled#0:8_bounty#0:9_t#1:2/init", 1, ($scope) => _text($scope["#text/0"], $scope._.t + $scope._._.bounty + $scope._._.input_settled), 2), ($signal) => /*@__PURE__*/ _for_closure("#text/2", /*@__PURE__*/ _if_closure("#text/0", 0, $signal))), "#text/0", 0);
const $if_content__input_settled = /*@__PURE__*/ _closure_get("input_settled/11", $if_content__input_settled__OR__bounty__OR__t, ($scope) => $scope._._, "__tests__/tags/row-list.marko_2_input_settled#0:8/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_settled($scope);
	$if_content__bounty($scope);
	$if_content__t._($scope);
};
const $if_content__bounty = /*@__PURE__*/ _init_resume("__tests__/tags/row-list.marko_2_bounty#0:9/init", /*@__PURE__*/ _closure_get("bounty/12", $if_content__input_settled__OR__bounty__OR__t, ($scope) => $scope._._, "__tests__/tags/row-list.marko_2_bounty#0:9/subscribe"));
const $if_content__t = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_settled__OR__bounty__OR__t);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $for_content__input_type = /*@__PURE__*/ _init_resume("__tests__/tags/row-list.marko_1_input_type#0:7/init", /*@__PURE__*/ _fill("__tests__/tags/row-list.marko_fill0", "input_type", /*@__PURE__*/ _for_closure("#text/2", ($scope) => $for_content__if($scope, $scope._.input_type ? 0 : 1))));
const $for_content__setup = $for_content__input_type;
const $for_content__$params = ($scope, $params2) => $for_content__t($scope, $params2[0]);
const $for_content__t = /*@__PURE__*/ _fill_const("__tests__/tags/row-list.marko_fill2", "t", $if_content__t);
const $bounty__closure = /*@__PURE__*/ _closure($if_content__bounty);
const $bounty = _var_resume("__tests__/tags/row-list.marko_0_bounty#9/var", /*@__PURE__*/ _const("bounty", $bounty__closure));
const $setup__script = _script("__tests__/tags/row-list.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], +$scope.bounty + 1, "bounty");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], 1);
	_var($scope, "#childScope/0", $bounty);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tally = ($scope, input_tally) => $for($scope, [input_tally]);
const $input = ($scope, input) => {
	$input_tally($scope, input.tally);
	$input_type($scope, input.type);
	$input_settled($scope, input.settled);
};
const $input_type = /*@__PURE__*/ _fill_const("__tests__/tags/row-list.marko_fill0", "input_type", $for_content__input_type);
const $input_settled__closure = /*@__PURE__*/ _closure($if_content__input_settled);
const $input_settled = /*@__PURE__*/ _fill_const("__tests__/tags/row-list.marko_fill1", "input_settled", $input_settled__closure);
var row_list_default = /*@__PURE__*/ _template("__tests__/tags/row-list.marko", $template, $walks, $setup, $input);

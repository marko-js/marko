// tags/child.marko
const $template$2 = "<div><!> <!></div>";
const $walks$2 = " D%c%l";
const $input_q = ($scope, input_q) => _text($scope["#text/1"], input_q);
const $input_on$1 = ($scope, input_on) => _text($scope["#text/2"], input_on);
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _el_read($scope["#div/0"]));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => {
	$input_q($scope, input.q);
	$input_on$1($scope, input.on);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/parent.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $placeholder_content = _content_resume("__tests__/tags/parent.marko_3*content", "loading...");
const $await_content__input_data_q = /*@__PURE__*/ _closure_get("input_data_q", ($scope) => $input_q($scope["#childScope/0"], $scope._._.input_data_q), ($scope) => $scope._._, "__tests__/tags/parent.marko_2_input_data_q#7/pending");
const $await_content__setup = ($scope) => {
	$await_content__input_data_q($scope);
	$await_content__on($scope);
	$setup$2($scope["#childScope/0"]);
};
const $await_content__on = /*@__PURE__*/ _closure_get("on", ($scope) => $input_on$1($scope["#childScope/0"], $scope._._.on), ($scope) => $scope._._, "__tests__/tags/parent.marko_2_on#8/pending");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 4));
};
const $on__closure = /*@__PURE__*/ _closure($await_content__on);
const $on$1 = /*@__PURE__*/ _let_change("on/8", $on__closure);
const $input_on__OR__input_onChange = /*@__PURE__*/ _or(5, ($scope) => $on$1($scope, $scope.input_on, $scope.input_onChange));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_onChange);
const $input_onChange = /*@__PURE__*/ _const("input_onChange", $input_on__OR__input_onChange);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup$1($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input$1 = ($scope, input) => {
	$input_on($scope, input.on);
	$input_onChange($scope, input.onChange);
	$input_data$1($scope, input.data);
};
const $input_data$1 = ($scope, input_data) => $input_data_q($scope, input_data?.q);
const $input_data_q__closure = /*@__PURE__*/ _closure($await_content__input_data_q);
const $input_data_q = /*@__PURE__*/ _const("input_data_q", $input_data_q__closure);
var parent_default = /*@__PURE__*/ _template("__tests__/tags/parent.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $input_on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_onChange($scope["#childScope/1"], $onChange($scope));
	$on($scope, false);
	$setup__script($scope);
}
const $input_data = ($scope, input_data) => $input_data$1($scope["#childScope/1"], input_data);
const $input = ($scope, input) => $input_data($scope, input.data);
const $onChange = ($scope) => (_new_on) => {
	$on($scope, _new_on);
};
_resumed["__tests__/template.marko_0/onChange"] = $onChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

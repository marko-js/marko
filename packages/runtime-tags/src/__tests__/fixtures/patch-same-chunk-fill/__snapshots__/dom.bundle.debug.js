// tags/probe.marko
const $template$1 = "<div> </div>";
const $walks$1 = " D l";
const $settled = /*@__PURE__*/ _fill_let("__tests__/tags/probe.marko0", "settled/5", ($scope) => _text($scope["#text/1"], $scope.settled ? "settled" : "pending"));
function $setup$1($scope) {
	$settled($scope, false);
}
const $input_promise__script = _script("__tests__/tags/probe.marko_0_input_promise#4", ($scope) => {
	_el_read($scope["#div/0"]);
	$scope.input_promise.then(() => {
		$settled($scope, true);
	});
});
const $input_promise$1 = /*@__PURE__*/ _const("input_promise", $input_promise__script);
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%c`)($walks$1);
const $await_content__v_name = ($scope, v_name) => _text($scope["#text/0"], v_name);
const $await_content__$params = ($scope, $params2) => $await_content__v_name($scope, $params2[0]?.name);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "<span class=loading>...</span>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", ($scope) => {
	$input_promise$1($scope["#childScope/2"], $scope.input_promise);
	$input_promise__closure($scope);
});
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

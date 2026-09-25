// tags/child.marko
const $template$1 = "<div><!> <!></div>";
const $walks$1 = " D%c%l";
const $input_q = ($scope, input_q) => _text($scope["#text/1"], input_q);
const $input_on = ($scope, input_on) => _text($scope["#text/2"], input_on);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _el_read($scope["#div/0"]));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_q($scope, input.q);
	$input_on($scope, input.on);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "loading...");
const $await_content__on = /*@__PURE__*/ _closure_get("on", ($scope) => $input_on($scope["#childScope/0"], $scope._._.on), ($scope) => $scope._._);
const $await_content__setup = ($scope) => {
	$await_content__on($scope);
	$setup$1($scope["#childScope/0"]);
	$input_q($scope["#childScope/0"], 1);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 4));
};
const $on = /*@__PURE__*/ _let("on/2");
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_q($scope["#childScope/0"], 2);
	$input_on($scope["#childScope/0"], 3);
	$on($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

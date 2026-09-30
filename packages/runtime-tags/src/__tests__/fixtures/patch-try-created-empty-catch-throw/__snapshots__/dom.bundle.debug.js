// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
function fail() {
	throw new Error("boom");
}
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n ? fail() : "ok"));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _subscribe_closure_get("__tests__/template.marko_2_input_promise#0:4/init", "input_promise/5", ($scope) => $try_content__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/template.marko_2_input_promise#0:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
	$setup$1($scope["#childScope/1"]);
};
const $if_content__try__catch = _content("__tests__/template.marko_1_#text#0/catch");
const $if_content__try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1), $try_content__setup, 0, $if_content__try__catch);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

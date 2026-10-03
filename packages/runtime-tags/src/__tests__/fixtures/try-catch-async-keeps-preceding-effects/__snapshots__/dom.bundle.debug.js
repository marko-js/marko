// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b%c`)($walks$1);
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", " ", " ", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $await_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $try2 = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$try($scope);
	$try2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<h1>Rows whose await rejects</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_promise", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise))));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $catch_content = _content("__tests__/tags/outer.marko_3*content", "error");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "done");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _fill_join_closure("__tests__/tags/outer.marko_fill0", "input_promise", /*@__PURE__*/ _closure_get("input_promise/6", ($scope) => $try_content__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/tags/outer.marko_2_input_promise#0:4/subscribe"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup);
const $rows = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "rows/5", ($scope) => $for($scope, [$scope.rows]));
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
function $setup($scope) {
	$rows($scope, [1]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_promise", $input_promise__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);

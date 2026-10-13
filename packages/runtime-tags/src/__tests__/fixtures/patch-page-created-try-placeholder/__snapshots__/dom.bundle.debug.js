// a.marko
const $template$1 = "<h1>A</h1>";
const $walks$1 = "b";
const $setup$1 = () => {};
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template$1, "b");

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_page__OR__input_promise = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_promise", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_page", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_page#3_input_promise#4/init", 5, ($scope) => $dynamicTag($scope, $scope.input_page === "b" ? b_default : a_default, () => ({ promise: $scope.input_promise })))));
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_page__OR__input_promise);
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_promise($scope, input.promise);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// b.marko
const $template = "<button>go</button><!><!>";
const $walks = " b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("__tests__/b.marko_2*content", "Loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/b.marko_1_input_promise#0:4/init", "input_promise/5", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/b.marko_1_input_promise#0:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, $setup, $input);

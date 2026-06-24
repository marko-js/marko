// tags/recurse.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
_enable_catch();
const $placeholder_content = _content_resume("__tests__/tags/recurse.marko_4_content", "LOADING...", "b");
const $await_content__input_level = /*@__PURE__*/ _closure_get("input_level", ($scope) => $input_level($scope["#childScope/0"], $scope._._._.input_level - 1), ($scope) => $scope._._._, "__tests__/tags/recurse.marko_3_input_level/pending");
const $await_content__setup = ($scope) => {
	$await_content__input_level($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0));
};
const $if_content__input_level = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr($scope["#div/0"], "data-level", $scope._.input_level));
const $if_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_level._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if("#text/0", "<div><!></div>", " D%l", $if_content__setup);
const $input_level__closure = /*@__PURE__*/ _closure($await_content__input_level);
const $input_level = /*@__PURE__*/ _const("input_level", ($scope) => {
	$if($scope, $scope.input_level ? 0 : 1);
	$if_content__input_level($scope);
	$input_level__closure($scope);
});
const $input = ($scope, input) => $input_level($scope, input.level);
var recurse_default = /*@__PURE__*/ _template("__tests__/tags/recurse.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_level($scope["#childScope/0"], 4);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

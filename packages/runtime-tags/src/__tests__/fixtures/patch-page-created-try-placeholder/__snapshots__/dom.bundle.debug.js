// a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
const $setup$2 = () => {};
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template$2, "b");

// b.marko
const $template$1 = "<button>go</button><!><!>";
const $walks$1 = " b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/b.marko_2*content", "Loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {}));
function $setup$1($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise$1 = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_page__OR__input_promise = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_page === "b" ? b_default : a_default, () => ({ promise: $scope.input_promise })));
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_page__OR__input_promise);
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_promise($scope, input.promise);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $await_content__value$1 = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params$1 = ($scope, $params2) => $await_content__value$1($scope, $params2[0]);
const $await_content$1 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params$1);
const $setup$2 = $await_content$1;
const $input_value$1 = ($scope, input_value) => $await_promise($scope, resolveAfter(input_value));
const $input$1 = ($scope, input) => $input_value$1($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", $setup$2, $input$1);

// tags/boundary.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content$1 = _content("__tests__/tags/boundary.marko_2*content", "loading inner");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.input_value)), 0, "__tests__/tags/boundary.marko_1_input_value#3/subscribe");
const $try_content__setup$1 = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $try$1 = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup$1);
function $setup$1($scope) {
	$try$1($scope, { placeholder: attrTag({ content: $placeholder_content$1($scope) }) });
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var boundary_default = /*@__PURE__*/ _template("__tests__/tags/boundary.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button>inc</button><!><!><!><!>";
const $walks = " b%b%b%c";
const $placeholder_content3 = /*@__PURE__*/ _content("__tests__/template.marko_6*content", "loading outer");
const $placeholder_content2 = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "loading static");
const $try_content3__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$input_value$1($scope["#childScope/0"], "static");
};
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading changing");
const $try_content2__count = /*@__PURE__*/ _closure_get("count", ($scope) => $input_value($scope["#childScope/0"], $scope._.count), 0, "__tests__/template.marko_2_count#4/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__count($scope);
	$setup$1($scope["#childScope/0"]);
};
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $input_value$1($scope["#childScope/0"], $scope._.count), 0, "__tests__/template.marko_1_count#4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$setup$2($scope["#childScope/0"]);
};
const $count__closure = /*@__PURE__*/ _closure($try_content__count, $try_content2__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
const $try = /*@__PURE__*/ _try("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content3__setup);
const $try3 = /*@__PURE__*/ _try("#text/3", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$try3($scope, { placeholder: attrTag({ content: $placeholder_content3($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

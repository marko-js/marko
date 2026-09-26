// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_value = $await_promise;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button id=first>first</button><button id=third>third</button><!><!>";
const $walks = " b b%c";
const $placeholder_content = _content("__tests__/template.marko_2*content", "LOADING");
const $try_content__value = /*@__PURE__*/ _closure_get("value", ($scope) => $input_value($scope["#childScope/0"], $scope._.value), 0, "__tests__/template.marko_1_value#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$setup$1($scope["#childScope/0"]);
};
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value__script = _script("__tests__/template.marko_0_value#3", ($scope) => $scope.value.then?.((v) => {
	if (v === "first") $value($scope, resolveAfter("second"));
	if (v === "third") $value($scope, "fourth");
}));
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	$value__closure($scope);
	$value__script($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$value($scope, resolveAfter("first"));
	});
	_on($scope["#button/1"], "click", function() {
		$value($scope, resolveAfter("third"));
	});
});
function $setup($scope) {
	$value($scope, "idle");
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

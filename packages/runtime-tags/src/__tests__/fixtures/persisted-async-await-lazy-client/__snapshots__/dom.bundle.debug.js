// template.marko
const $template = "<main><h1> </h1><!><button>Next</button></main>";
const $walks = "E l%b l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "loading");
const $await_content = _resume("__tests__/template.marko_1_#text#0/await", /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D "));
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => $try_content__await_promise($scope, resolveAfter("v" + $scope._.n, $scope._.n)));
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let("n/6", $n__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

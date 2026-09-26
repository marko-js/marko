// template.marko
const $template = "<!><!><div>after</div><button>inc</button>";
const $walks = "b%c b";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "value <!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => $try_content__await_promise($scope, { then(resolve) {
	resolve($scope._.n);
} }), 0, "__tests__/template.marko_1_n#2/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

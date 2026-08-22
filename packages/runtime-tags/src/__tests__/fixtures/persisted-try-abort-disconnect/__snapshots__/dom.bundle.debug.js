// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "caught-a");
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "<em>wait</em>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>A:<!></p>", "Db%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => $try_content__await_promise($scope, $scope._.input_a));
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
	$setup__script($scope);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

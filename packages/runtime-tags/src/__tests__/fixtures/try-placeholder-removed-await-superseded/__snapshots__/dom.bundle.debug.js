// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "LOADING");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "value <!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => $try_content__await_promise($scope, $scope._.n ? resolveAfter($scope._.n) : 0), 0, "__tests__/template.marko_1_n#2/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	let $placeholder;
	if ($scope.n !== 2) {
		$placeholder = attrTag({ content: $placeholder_content($scope) });
	}
	$try($scope, { placeholder: $placeholder });
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

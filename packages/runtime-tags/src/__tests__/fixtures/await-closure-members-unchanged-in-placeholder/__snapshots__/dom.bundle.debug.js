// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading...");
const $await_content__value_a__OR__value_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.value_a + $scope._._.value_b));
const $await_content__value_a = /*@__PURE__*/ _closure_get("value_a/5", $await_content__value_a__OR__value_b, ($scope) => $scope._._, "__tests__/template.marko_2_value_a#3/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__value_a($scope);
	$await_content__value_b($scope);
};
const $await_content__value_b = /*@__PURE__*/ _closure_get("value_b/6", $await_content__value_a__OR__value_b, ($scope) => $scope._._, "__tests__/template.marko_2_value_b#4/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	$value_a($scope, $scope.value?.a);
	$value_b($scope, $scope.value?.b);
});
const $value_a__closure = /*@__PURE__*/ _closure($await_content__value_a);
const $value_a__script = _script("__tests__/template.marko_0_value_a#3", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, {
		a: $scope.value_a + 1,
		b: 1
	});
}));
const $value_a = /*@__PURE__*/ _const("value_a", ($scope) => {
	$value_a__closure($scope);
	$value_a__script($scope);
});
const $value_b__closure = /*@__PURE__*/ _closure($await_content__value_b);
const $value_b = /*@__PURE__*/ _const("value_b", $value_b__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$value($scope, {
		a: 1,
		b: 1
	});
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

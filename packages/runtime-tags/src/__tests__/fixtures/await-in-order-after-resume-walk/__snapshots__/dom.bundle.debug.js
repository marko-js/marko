// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading button");
const $await_content__value = /*@__PURE__*/ _closure_get("value", ($scope) => _text($scope["#text/1"], $scope._._.value), ($scope) => $scope._._, "__tests__/template.marko_2_value#2/subscribe");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope._._, +$scope._._.value + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__value($scope);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<div> </div>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $value__closure = /*@__PURE__*/ _closure($await_content__value);
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	$await_promise($scope, $scope.value ? $scope.value : resolveAfter($scope.value, 3));
	$value__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$await_content2($scope);
	$value($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

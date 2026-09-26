// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__value = /*@__PURE__*/ _closure_get("value/4", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.value, 1)), 0, "__tests__/template.marko_1_value#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$await_content($scope);
};
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$value__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, +$scope.value + 1);
}));
function $setup($scope) {
	$value($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => _text($scope["#text/0"], $scope._.value), 0, "__tests__/template.marko_1_value#0:2/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("x", 1));
};
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value = /*@__PURE__*/ _let("value/2", $value__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<p>b <!></p><!><!>", "Db%l%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, +$scope.value + 1);
}));
function $setup($scope) {
	$value($scope, 1);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content2 = _content("__tests__/template.marko_4*content", "inner loading");
const $placeholder_content = _content("__tests__/template.marko_3*content", "outer loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content2__await_promise($scope, resolveAfter($scope._._.count)), ($scope) => $scope._._, "__tests__/template.marko_2_count#2/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__count($scope);
	$await_content($scope);
};
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => $try_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $count__closure = /*@__PURE__*/ _closure($try_content2__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

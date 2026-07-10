// template.marko
const $template = "<button>inc</button><div>count:<!></div><!><!>";
const $walks = " bDb%l%c";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading", "b");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count/pending");
const $await_content__setup = $await_content__count;
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span><!> closure:<!></span>", "D%c%l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("v", 1));
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

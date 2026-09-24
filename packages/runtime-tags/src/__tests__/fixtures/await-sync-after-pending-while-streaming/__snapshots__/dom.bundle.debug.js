// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__result = ($scope, result) => _text($scope["#text/0"], result);
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__query = /*@__PURE__*/ _closure_get("query", ($scope) => $try_content__await_promise($scope, $scope._.query ? resolveAfter(`found ${$scope._.query}`, 1) : "no query"), 0, "__tests__/template.marko_1_query#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__query($scope);
	$await_content($scope);
};
const $query__closure = /*@__PURE__*/ _closure($try_content__query);
const $query = /*@__PURE__*/ _let("query/3", ($scope) => {
	_text($scope["#text/1"], $scope.query);
	$query__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$query($scope, $scope.query === "a" ? "b" : "");
}));
function $setup($scope) {
	$query($scope, "a");
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

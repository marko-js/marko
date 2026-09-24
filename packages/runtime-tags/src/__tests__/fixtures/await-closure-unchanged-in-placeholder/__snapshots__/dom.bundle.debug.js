// template.marko
const $template = "<button>set</button><!><!>";
const $walks = " b%c";
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading...");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#2/subscribe");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => $signal($scope, 0).onabort = () => {});
const $await_content__setup = ($scope) => {
	$await_content__count($scope);
	$signalReset($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, 2);
}));
function $setup($scope) {
	$count($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

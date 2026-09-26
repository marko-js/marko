// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#span/0"], "click", function() {
	console.log($scope.x);
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => _text($scope["#text/1"], $scope.x));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", " D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope._, $scope._.items.filter((i) => i !== $scope["#LoopKey"]));
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$await_content2($scope);
	$for_content__await_promise($scope, resolveAfter($scope["#LoopKey"], $scope["#LoopKey"]));
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/1", "<button><!>:<!></button>", " D%c%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, (x) => x]));
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$items($scope, [1, 2]);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

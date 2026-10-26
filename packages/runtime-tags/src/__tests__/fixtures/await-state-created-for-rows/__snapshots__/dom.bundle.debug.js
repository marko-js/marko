// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $await_content__item = /*@__PURE__*/ _closure_get("item/7", ($scope) => _text($scope["#text/0"], $scope._.item), 0, "__tests__/template.marko_2_item#1:2/subscribe");
const $await_content__setup = $await_content__item;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__n = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__await_promise($scope, Promise.resolve($scope._.n)));
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item__closure = /*@__PURE__*/ _closure($await_content__item);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__closure);
const $n = /*@__PURE__*/ _let("n/5", $for_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

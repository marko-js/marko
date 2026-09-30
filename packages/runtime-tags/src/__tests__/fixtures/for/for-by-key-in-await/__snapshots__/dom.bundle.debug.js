// template.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $await_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!>:<!></em>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__input_value = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__await_promise($scope, $scope._.input_value));
const $for_content__setup = ($scope) => {
	$for_content__input_value._($scope);
	$await_content($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/1", "<div><!></div>", "D%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, { id: "c" }]);
}));
function $setup($scope) {
	$items($scope, [{ id: "a" }, { id: "b" }]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value = /*@__PURE__*/ _const("input_value", $for_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

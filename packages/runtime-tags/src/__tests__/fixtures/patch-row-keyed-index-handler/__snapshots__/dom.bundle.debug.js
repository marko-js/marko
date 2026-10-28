// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + (($scope.i + 1) * 100 + $scope.item_v));
}));
const $for_content__setup = ($scope) => {
	$for_content__setup__script($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_v($scope, $params2[0]?.v);
	$for_content__i($scope, $params2[1]);
};
const $for_content__item_v = /*@__PURE__*/ _const("item_v");
const $for_content__i = /*@__PURE__*/ _const("i");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<button class=r> </button>", " D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

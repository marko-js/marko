// template.marko
const $template = "<ul></ul><button> </button>";
const $walks = " b D l";
const $for_content__item_attrs__script = _script("__tests__/template.marko_1_item_attrs#4", ($scope) => _attrs_script($scope, "#li/0"));
const $for_content__item_attrs = /*@__PURE__*/ _const("item_attrs", ($scope) => {
	$for_content__item_attrs__script($scope);
	_attrs($scope, "#li/0", $scope.item_attrs);
});
const $for_content__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content__$params = ($scope, $params2) => $for_content__item_attrs($scope, $params2[0]?.attrs);
const $count = _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", " D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item.id]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

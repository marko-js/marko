// template.marko
const $template = "<button>reverse</button><!><!><!>";
const $walks = " b%b%c";
const $for_content2__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_name($scope, $params3[0]?.name);
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of("#text/1", "<span> </span>", "D l", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#text/2", "<em> </em>", "D l", 0, $for_content2__$params);
const $items = /*@__PURE__*/ _let("items/6", ($scope) => {
	$for($scope, [$scope.items, "id"]);
	$for2($scope, [$scope.items, (item) => item.id]);
});
const $input_items = $items;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.toReversed());
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

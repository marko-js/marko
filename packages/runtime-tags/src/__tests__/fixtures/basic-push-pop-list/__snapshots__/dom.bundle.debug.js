// template.marko
const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
const $walks = "D%b b l";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $id = /* @__PURE__ */ _let("id/3");
const $for = /* @__PURE__ */ _for_of("#text/0", " ", " b", 0, $for_content__$params);
const $items = /* @__PURE__ */ _let("items/4", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		const nextId = $scope.id + 1;
		$id($scope, nextId);
		$items($scope, [...$scope.items, nextId]);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.slice(0, -1));
	});
});
function $setup($scope) {
	$id($scope, 0);
	$items($scope, []);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

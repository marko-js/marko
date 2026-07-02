// template.marko
const $template = "<button></button><ul></ul>";
const $walks = " b b";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $ul_getter = _el("__tests__/template.marko_0_#ul", "#ul/1");
const $for = /* @__PURE__ */ _for_of("#ul/1", "<li> </li>", "D l", 0, $for_content__$params);
const $items = /* @__PURE__ */ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$items($scope, [...$scope.items, $scope.items?.length]);
	});
	{
		const getter = $ul_getter($scope);
		getter().classList.add("attached");
	}
});
function $setup($scope) {
	$items($scope, [0, 1]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

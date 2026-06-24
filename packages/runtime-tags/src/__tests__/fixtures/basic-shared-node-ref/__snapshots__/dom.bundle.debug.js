// template.marko
const $template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
const $walks = " b b b";
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $open__script = _script("__tests__/template.marko_0_open", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
const $open = /*@__PURE__*/ _let("open/3", ($scope) => {
	_attr($scope["#ul/0"], "hidden", !$scope.open);
	$open__script($scope);
});
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $list__script = _script("__tests__/template.marko_0_list", ($scope) => _on($scope["#button/2"], "click", function() {
	$list($scope, [].concat($scope.list).reverse());
}));
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$for($scope, [$scope.list, function(x) {
		return x;
	}]);
	$list__script($scope);
});
function $setup($scope) {
	$open($scope, true);
	$list($scope, [
		1,
		2,
		3
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

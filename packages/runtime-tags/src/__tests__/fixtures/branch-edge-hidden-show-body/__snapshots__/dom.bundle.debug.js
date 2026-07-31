// template.marko
const $template = "<div class=host></div><button class=outer>Outer</button><button class=show>Show</button><button class=items>Items</button>";
const $walks = " b b b b";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__show = /*@__PURE__*/ _show("#text/3", "#text/0", "#text/2");
const $if_content__shown = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__show($scope, $scope._.shown));
const $if_content__setup = ($scope) => {
	$if_content__shown._($scope);
	$if_content__items._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#text/1", "<b> </b>", "D ", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__for($scope, [$scope._.items]));
const $if = /*@__PURE__*/ _if("#div/0", "<!><!><!><!><!><!>", "b%b%b%b%", $if_content__setup);
const $outer = /*@__PURE__*/ _let("outer/4", ($scope) => $if($scope, $scope.outer ? 0 : 1));
const $shown = /*@__PURE__*/ _let("shown/5", $if_content__shown);
const $items = /*@__PURE__*/ _let("items/6", ($scope) => {
	$items_length($scope, $scope.items?.length);
	$if_content__items($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$outer($scope, !$scope.outer);
	});
	_on($scope["#button/2"], "click", function() {
		$shown($scope, !$scope.shown);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$shown($scope, true);
	$items($scope, [1]);
	$setup__script($scope);
}
const $items_length__script = _script("__tests__/template.marko_0_items_length", ($scope) => _on($scope["#button/3"], "click", function() {
	$items($scope, $scope.items_length ? [] : [1, 2]);
}));
const $items_length = /*@__PURE__*/ _const("items_length", $items_length__script);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

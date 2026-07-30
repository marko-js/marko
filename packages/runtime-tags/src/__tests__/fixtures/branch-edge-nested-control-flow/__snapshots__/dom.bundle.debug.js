// template.marko
const $template = "<div class=host></div><button class=outer>Outer</button><button class=rotate>Rotate</button><button class=drop>Drop</button><button class=clear>Clear</button><button class=show>Show</button>";
const $walks = " b b b b b b";
const $else_content__item_id = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $else_content__setup = $else_content__item_id;
const $if_content2__item_id = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $if_content2__setup = $if_content2__item_id;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<b>even <!></b>", "Db%", $if_content2__setup, "<i>odd <!></i>", "Db%", $else_content__setup);
const $for_content__item_id = /*@__PURE__*/ _const("item_id", ($scope) => {
	$for_content__if($scope, $scope.item_id % 2 === 0 ? 0 : 1);
	$if_content2__item_id($scope);
	$else_content__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $if_content__for = /*@__PURE__*/ _for_of("#text/0", "<!>", "%", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__for($scope, [$scope._.items, "id"]));
const $if_content__setup = ($scope) => {
	$if_content__items._($scope);
	$if_content__shown._($scope);
};
const $if_content__show = /*@__PURE__*/ _show("#text/2", "#text/1");
const $if_content__shown = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__show($scope, $scope._.shown));
const $if = /*@__PURE__*/ _if("#div/0", "<!><!><u>tail</u><!><!>", "%b%c%", $if_content__setup);
const $outer = /*@__PURE__*/ _let("outer/6", ($scope) => $if($scope, $scope.outer ? 0 : 1));
const $items = /*@__PURE__*/ _let("items/7", $if_content__items);
const $shown = /*@__PURE__*/ _let("shown/8", $if_content__shown);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$outer($scope, !$scope.outer);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, [...$scope.items.slice(1), $scope.items?.[0]]);
	});
	_on($scope["#button/3"], "click", function() {
		$items($scope, $scope.items.slice(1));
	});
	_on($scope["#button/4"], "click", function() {
		$items($scope, []);
	});
	_on($scope["#button/5"], "click", function() {
		$shown($scope, !$scope.shown);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$items($scope, [{ id: 0 }, { id: 1 }]);
	$shown($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

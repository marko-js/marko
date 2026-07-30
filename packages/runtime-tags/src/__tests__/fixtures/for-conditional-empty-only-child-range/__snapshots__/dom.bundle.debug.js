// template.marko
const $template = "<div class=list></div><button class=rotate>Rotate</button><button class=toggle>Toggle</button><button class=drop>Drop</button>";
const $walks = " b b b b";
const $if_content__item_id = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $if_content__setup = $if_content__item_id;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<p>item <!></p>", "Db%", $if_content__setup);
const $for_content__item_show = ($scope, item_show) => $for_content__if($scope, item_show ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_show($scope, $params2[0]?.show);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for_content__item_id = /*@__PURE__*/ _const("item_id", $if_content__item_id);
const $for = /*@__PURE__*/ _for_of("#div/0", "<!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items.slice(1), $scope.items?.[0]]);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.map((item) => ({
			...item,
			show: !item.show
		})));
	});
	_on($scope["#button/3"], "click", function() {
		$items($scope, $scope.items.slice(1));
	});
});
function $setup($scope) {
	$items($scope, [
		{
			id: 0,
			show: true
		},
		{
			id: 1,
			show: false
		},
		{
			id: 2,
			show: true
		}
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<div class=host><h3>list</h3><!><h4>tail</h4><!></div><button class=rev>Reverse</button><button class=pop>Pop</button><button class=big>Big</button>";
const $walks = "Db%c%l b b b";
const $for_content__item = ($scope, item) => {
	_text($scope["#text/0"], item);
	_text($scope["#text/1"], item);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<em> </em><span>#<!></span>", "D lDb%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, (x) => x]));
const $if = /*@__PURE__*/ _if("#text/1", "<b>big</b><i>really</i>");
const $big = /*@__PURE__*/ _let("big/6", ($scope) => $if($scope, $scope.big ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$items($scope, [...$scope.items].reverse());
	});
	_on($scope["#button/3"], "click", function() {
		$items($scope, $scope.items.slice(0, -1));
	});
	_on($scope["#button/4"], "click", function() {
		$big($scope, !$scope.big);
	});
});
function $setup($scope) {
	$items($scope, [
		1,
		2,
		3
	]);
	$big($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

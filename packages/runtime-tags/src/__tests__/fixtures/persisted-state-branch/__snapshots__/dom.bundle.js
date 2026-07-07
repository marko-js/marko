// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(5, ($scope) => _text($scope.b, $scope._.l));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.l));
const $if = /*@__PURE__*/ _if(4, "<p class=detail>detail <!></p>", "Db%l", $if_content__count);
const $show = /*@__PURE__*/ _let(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $count = /*@__PURE__*/ _let(11, ($scope) => {
	_text($scope.d, $scope.l);
	$if_content__count($scope);
	$for_content__count($scope);
});
const $for = /*@__PURE__*/ _for_of(5, "<li><!>:<!></li>", "D%c%l", $for_content__setup, $for_content__$params);
const $list = /*@__PURE__*/ _let(12, ($scope) => $for($scope, [$scope.m, function(item) {
	return item;
}]));
const $setup__script = _script_update("a4", ($scope) => {
	_on($scope.b, "click", function() {
		$show($scope, !$scope.k);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.l + 1);
	});
	_on($scope.g, "click", function() {
		$list($scope, [...$scope.m, `c${$scope.l}`]);
	});
});
enableBranches();

// template.marko.update.mjs
const $show_seed = _update_signal("a0");
const $count_seed = _update_signal("a1");
const $list_seed = _update_signal("a2");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("k" in patch) _update_seed(live, $show_seed, patch["k"]);
	if ("l" in patch) _update_seed(live, $count_seed, patch["l"]);
	if ("m" in patch) _update_seed(live, $list_seed, patch["m"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("a3", $update);

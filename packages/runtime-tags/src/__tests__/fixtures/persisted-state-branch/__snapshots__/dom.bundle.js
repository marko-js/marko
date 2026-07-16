// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(5, ($scope) => _text($scope.b, $scope._.l));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.l));
const $if = /*@__PURE__*/ _if(4, "<p class=detail>detail <!></p>", "Db%l", $if_content__count);
const $show = /*@__PURE__*/ _let_persisted(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => {
	_text($scope.d, $scope.l);
	$if_content__count($scope);
	$for_content__count($scope);
});
const $for = /*@__PURE__*/ _for_of(5, "<li><!>:<!></li>", "D%c%l", $for_content__setup, $for_content__$params);
const $list = /*@__PURE__*/ _let_persisted(12, ($scope) => $for($scope, [$scope.m, function(item) {
	return item;
}]));
const $setup__script = _script_update("a3", ($scope) => {
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

// template.marko.persisted.mjs
const $for_content__count = /*@__PURE__*/ _for_closure(5, ($scope) => _text($scope.b, $scope._.l));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.l));
const $if = /*@__PURE__*/ _if(4, "<p class=detail>detail <!></p>", "Db%l", $if_content__count);
const $show = _var_resume("a4", /*@__PURE__*/ _let_persisted(10, ($scope) => $if($scope, $scope.k ? 0 : 1)));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(11, ($scope) => {
	_text($scope.d, $scope.l);
	$if_content__count($scope);
	$for_content__count($scope);
}));
const $for = /*@__PURE__*/ _for_of(5, "<li><!>:<!></li>", "D%c%l", $for_content__setup, $for_content__$params);
const $list = _var_resume("a6", /*@__PURE__*/ _let_persisted(12, ($scope) => $for($scope, [$scope.m, function(item) {
	return item;
}])));
const $setup__script = _script_shared(($scope) => {
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
const $show_seed = _update_signal("a4");
const $count_seed = _update_signal("a5");
const $list_seed = _update_signal("a6");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("k" in _patch) _update_seed(_live, $show_seed, _patch["k"]);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	if ("m" in _patch) _update_seed(_live, $list_seed, _patch["m"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a2", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

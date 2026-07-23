// template.marko.persisted.mjs
const $for_content__count = /*@__PURE__*/ _for_closure(5, ($scope) => _text($scope.b, $scope._.l));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.l));
const $if = /*@__PURE__*/ _if(4, "<p class=detail>detail <!></p>", "Db%l", $if_content__count);
const $show = _var_resume("a6", /*@__PURE__*/ _let_persisted(10, ($scope) => $if($scope, $scope.k ? 0 : 1)));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(11, ($scope) => {
	_text($scope.d, $scope.l);
	$if_content__count($scope);
	$for_content__count($scope);
}));
const $for = /*@__PURE__*/ _for_of(5, "<li><!>:<!></li>", "D%c%l", $for_content__setup, $for_content__$params);
const $list = _var_resume("a8", /*@__PURE__*/ _let_persisted(12, ($scope) => {
	if (!updating) $for($scope, [$scope.m, function(item) {
		return item;
	}]);
}));
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
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("a")) });
const $show_seed = _update_signal("a6");
const $count_seed = _update_signal("a7");
const $list_seed = _update_signal("a8");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_content__construct = ($scope) => {
	_text($scope.b, $scope._.l);
};
const $if_content__construct = ($scope) => {
	_text($scope.a, $scope._.l);
};
const $construct = ($scope) => {
	_text($scope.d, $scope.l);
	if ("De" in $scope) _update_if($scope, $scope, "De", "Ae", 0, ["a1"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $show_seed, $patch["k"]);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("m" in $patch) _update_seed($live, $list_seed, $patch["m"]);
	$_holes($patch, $live);
	if ("Af" in $patch) _update_for($patch["Af"], $live["Af"], $for_content_holes, $live, "Af", "a2");
};
_construct("a2", $for_content__construct);
_construct("a1", $if_content__construct);
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

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

// tags/menu.marko
const $for_content__it_onPick__script = _script("b1", ($scope) => _on($scope.a, "click", $scope.f));

// template.marko
const $picked = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => _text($scope.b, $scope.f));
const $onPick = ($locals) => function() {
	const $scope = $locals._;
	$picked($scope, $locals.g.name);
};
_resumed.a0 = $onPick;

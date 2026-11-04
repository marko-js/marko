// tags/menu.marko
const $for_content__it_onPick__script = _script_patch("b0 f", ($scope) => _on($scope.a, "click", $scope.f));

// template.marko
const $picked = _let(5, ($scope) => _text($scope.b, $scope.f));
const $onPick = ($locals) => function() {
	const $scope = $locals._;
	$picked($scope, $locals.g.name);
};
_resumed.a0 = $onPick;

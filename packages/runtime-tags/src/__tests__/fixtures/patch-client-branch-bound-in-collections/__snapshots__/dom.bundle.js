// tags/get.marko
const $input_m__script = _script_patch("c2 f", ($scope) => _on($scope.a, "click", $scope.f.get("k")));
const $input_s__script = _script_patch("c1 g", ($scope) => _on($scope.b, "click", [...$scope.g][0]));
const $input_k__script = _script_patch("c0 h", ($scope) => _on($scope.c, "click", [...$scope.h.keys()][0]));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $f = ($scope) => function() {
	console.log("fn", $scope._._.e);
};
_bind_resume("a0 >>e", $f);

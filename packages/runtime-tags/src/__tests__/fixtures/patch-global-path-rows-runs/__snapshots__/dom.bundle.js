// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<li> </li>", "D ", /* @__PURE__ */ _fill_global_path_for("a0", 1, ($scope) => _text($scope.a, track("li", $scope.$.o.x)), "o", "x"));
const $n = _let(2, ($scope) => $for($scope, [
	$scope.c,
	0,
	1
]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));

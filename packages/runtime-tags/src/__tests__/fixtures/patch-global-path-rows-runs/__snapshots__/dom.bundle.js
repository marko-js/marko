// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $for_content__$global_o_x = /*@__PURE__*/ _for_closure_patch("a3", 1, ($scope) => _text($scope.a, track("li", $scope.$.o.x)), 3);
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<li> </li>", "D ", $for_content__$global_o_x);
const $n = _let(2, ($scope) => $for($scope, [$scope.c]));
const $global_o_x = _fill_global_path("a0", $for_content__$global_o_x, "o", "x");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));

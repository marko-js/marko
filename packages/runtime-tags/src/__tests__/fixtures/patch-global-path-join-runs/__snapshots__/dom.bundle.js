// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => _text($scope.a, track("p", $scope.$.o.x)));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__$global_o_x);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_o_x = _fill_global_path("a0", $if_content__$global_o_x, "o", "x");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));

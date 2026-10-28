// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", /* @__PURE__ */ _fill_global_path_join("a0", ($scope) => _text($scope.a, track("p", $scope.$.o.x)), "o", "x"));
const $open = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));

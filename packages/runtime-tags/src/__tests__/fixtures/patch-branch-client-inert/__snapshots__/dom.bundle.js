// helper.ts
function now() {
	return "now";
}

// template.marko
const $if_content__setup = ($scope) => _text($scope.a, now());
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));

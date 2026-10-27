// tags/card.marko
const $_return = ($scope) => function() {
	return "f:" + $scope.c;
};
_bind_resume("b0 c", $_return);

// template.marko
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$if_content__l($scope, { fn: () => "set" });
}));
const $if_content__l = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f.fn()));
const $if_content__r = _var_resume("a0", $if_content__l);

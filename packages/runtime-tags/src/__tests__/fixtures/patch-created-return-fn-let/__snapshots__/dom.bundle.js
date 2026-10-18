// tags/card.marko
const $_return = ($scope) => function() {
	return "f:" + $scope.c;
};
_resumed.b0 = $_return;

// template.marko
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$if_content__l($scope, { fn: () => "set" });
}));
const $if_content__l = /*@__PURE__*/ _fill_let("a3", 5, ($scope) => _text($scope.c, $scope.f.fn()));
const $if_content__r = _var_resume("a1", $if_content__l);

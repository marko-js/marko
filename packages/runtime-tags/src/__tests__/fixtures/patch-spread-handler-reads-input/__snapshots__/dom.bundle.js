// template.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("a1", 2, 0, ($scope) => _text($scope.a, $scope._.h));
const $if = /*@__PURE__*/ _if(2, "<em> </em>", "D ", $if_content__input_label);
const $count = _let(8, ($scope) => {
	_text($scope.e, $scope.i);
	$if($scope, $scope.i ? 0 : 1);
});
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.i + 1);
}));
const $attrs2__script = _script("a3", ($scope) => _attrs_script($scope, "b"));
const $attrs = ($scope) => function() {
	console.log("clicked " + $scope.h);
};
_bind_resume("a0 h", $attrs);

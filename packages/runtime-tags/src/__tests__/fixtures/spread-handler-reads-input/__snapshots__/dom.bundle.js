// template.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.h));
const $if = /*@__PURE__*/ _if(2, "<em> </em>", "D ", $if_content__input_label);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.e, $scope.i);
	$if($scope, $scope.i ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.i + 1);
}));
const $input_label__script = _script("a2", ($scope) => _attrs_script($scope, "b"));
const $onClick = ($scope) => function() {
	console.log("clicked " + $scope.h);
};
_resumed.a0 = $onClick;

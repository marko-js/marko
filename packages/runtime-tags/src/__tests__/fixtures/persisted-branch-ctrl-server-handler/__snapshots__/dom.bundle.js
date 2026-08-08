// template.marko
const $if_content__onChange = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _attr_input_value($scope, "a", "x", $scope._.f)));
const $if_content__setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $if_content__setup = ($scope) => {
	$if_content__onChange._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(0, "<input>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
function $onChange($scope) {
	return (next) => {
		document.querySelector("output").textContent = $scope.e + next;
	};
}
_resume("a0", $onChange);

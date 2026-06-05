// tags/child.marko
const $input__script = _script("b0", ($scope) => {
	{
		$scope.b;
		const updated = _call($scope.b.valueChange, 2);
		if (updated !== 2) throw new Error(`Expected value to be 2`);
		console.log(updated, $scope.b.value);
	}
});
const $input = /* @__PURE__ */ _const(1, $input__script);

// template.marko
const $count = /* @__PURE__ */ _let(1, ($scope) => $input($scope.a, {
	value: $scope.b,
	valueChange: $valueChange($scope)
}));
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("a0", $valueChange);

// tags/leaf.marko
const $input_data_val = ($scope, input_data_val) => _text($scope.a, input_data_val);
const $input_data = ($scope, input_data) => $input_data_val($scope, input_data?.val);

// tags/mid.marko
const $keep = ($scope, keep) => _text($scope.b, keep);
const $rest = ($scope, rest) => $input_data($scope.c, rest);
const $group2 = ($scope, $group) => {
	(({ keep, ...rest }) => $rest($scope, rest))($group);
	$keep($scope, $group.keep);
};

// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
const $n = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$group2($scope.c, {
		keep: "k",
		val: $scope.d
	});
	$n__script($scope);
});

// tags/make.marko
const $_return = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.c;
};
_resumed.b0 = $_return;

// tags/reader.marko
const $input_fn__script = _script("c0", ($scope) => {
	{
		const el = $scope.b;
		el.textContent += el.fn === $scope.e ? "same;" : "new;";
		el.fn = $scope.a.onclick = $scope.e;
	}
});
const $input_fn = /*@__PURE__*/ _const(4, $input_fn__script);

// template.marko
const $fn = _var_resume("a0", ($scope, fn) => $input_fn($scope.c, fn));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	document.getElementById("out").textContent = "o";
}));

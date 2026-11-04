// tags/reader.marko
const $input_fn__script = _script("b0", ($scope) => {
	{
		const el = $scope.b;
		el.textContent += el.fn === $scope.e ? "same;" : "new;";
		el.fn = $scope.a.onclick = $scope.e;
	}
});

// template.marko
const $fn = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.d;
};
_resumed.a0 = $fn;

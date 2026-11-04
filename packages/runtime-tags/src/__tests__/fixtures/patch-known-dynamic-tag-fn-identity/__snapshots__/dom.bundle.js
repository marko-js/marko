// tags/reader.marko
const $input_fn__script = _script_patch("b0 e", ($scope) => {
	{
		const el = $scope.b;
		el.textContent += el.fn === $scope.e ? "same;" : "new;";
		el.fn = $scope.a.onclick = $scope.e;
	}
});

// template.marko
const $fn = ($scope) => function() {
	document.getElementById("out").textContent = "v:" + $scope.e;
};
_bind_resume("a0 e", $fn);

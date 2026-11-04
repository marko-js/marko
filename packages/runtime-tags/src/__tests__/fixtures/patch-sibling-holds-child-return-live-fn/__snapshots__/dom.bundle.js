// tags/make.marko
const $_return = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.c;
};
_bind_resume("c0 c", $_return);

// tags/holder.marko
const $input_fn__script = _script_patch("b0 e", ($scope) => {
	{
		const el = $scope.b;
		el.textContent += el.fn === $scope.e ? "same;" : "new;";
		el.fn = $scope.a.onclick = $scope.e;
	}
});

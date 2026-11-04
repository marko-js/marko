// tags/make.marko
const $_return = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.c;
};
_resumed.b0 = $_return;

// template.marko
const $fn__script = _script("a1", ($scope) => {
	{
		const el = $scope.d;
		el.textContent += el.fn === $scope.h ? "same;" : "new;";
		el.fn = $scope.c.onclick = $scope.h;
	}
});
const $fn = _var_resume("a0", /*@__PURE__*/ _const(7, $fn__script));

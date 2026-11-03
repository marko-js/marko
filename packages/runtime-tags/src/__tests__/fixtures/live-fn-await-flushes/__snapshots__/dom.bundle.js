// template.marko
const $placeholder_content = _content("a5", "loading");
const $Use_content__fn__OR__where__script = _script("a2", ($scope) => {
	{
		const el = document.getElementById("log");
		el.textContent += $scope.d + ":" + (el.last === $scope.c ? "same;" : "new;");
		el.last = $scope.c;
	}
});
const $fn = ($scope) => () => $scope.e;
_resumed.a0 = $fn;

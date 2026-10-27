// template.marko
const $placeholder_content = _content$1("a6", "loading");
const $Use_content__fn__OR__where__script = _script("a2", ($scope) => {
	{
		const el = document.getElementById("log");
		el.textContent += $scope.d + ":" + (el.last === $scope.c ? "same;" : "new;");
		el.last = $scope.c;
	}
});
const $fn = ($scope) => () => $scope.e;
_bind_resume("a0 e", $fn);

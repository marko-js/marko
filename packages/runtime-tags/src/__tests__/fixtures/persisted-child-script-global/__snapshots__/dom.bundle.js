// tags/badge/index.marko
_script("b0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.b + "]";
	}
});

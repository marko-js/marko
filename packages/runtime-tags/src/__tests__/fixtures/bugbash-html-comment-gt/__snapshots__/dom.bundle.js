// template.marko
const $setup__script = _script("a0", ($scope) => {
	{
		const data = $scope.a.data;
		$scope.b.textContent = `${data.replace(/>/g, "[GT]")} (length ${data.length})`;
	}
});

// template.marko
const $setup__script = _script("a0", ($scope) => {
	{
		const el = document.getElementById("foo");
		el.innerHTML = "foo";
		onAbort($scope, 0, () => el.innerHTML = "");
	}
});

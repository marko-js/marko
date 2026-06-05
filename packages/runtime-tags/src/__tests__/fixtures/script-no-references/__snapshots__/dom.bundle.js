// template.marko
const $setup__script = _script("a0", ($scope) => {
	{
		const el = document.getElementById("foo");
		el.innerHTML = "foo";
		$signal($scope, 0).onabort = () => el.innerHTML = "";
	}
});

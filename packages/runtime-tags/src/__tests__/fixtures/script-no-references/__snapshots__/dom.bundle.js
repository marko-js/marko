// total: 1620 (min) 871 (brotli)
// template.marko: 116 (min) 81 (brotli)
const $setup__script = _script("a0", ($scope) => {
	{
		const el = document.getElementById("foo");
		el.innerHTML = "foo";
		$signal($scope, 0).onabort = () => el.innerHTML = "";
	}
});

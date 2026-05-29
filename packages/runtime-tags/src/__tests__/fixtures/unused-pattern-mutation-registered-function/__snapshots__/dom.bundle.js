// total: 2289 (min) 1139 (brotli)
// template.marko: 141 (min) 106 (brotli)
const identity = (fn) => fn;
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", identity((_, el) => {
	let bar;
	(($result, value) => ({value, bar} = $result, $result))({
		value: "updated",
		bar: "bar"
	});
	el.textContent = bar;
})));

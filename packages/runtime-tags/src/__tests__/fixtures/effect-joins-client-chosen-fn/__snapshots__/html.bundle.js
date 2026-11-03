// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	let n = 0;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = low;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: input.title,
		e: upper,
		f: n,
		g: up,
		h: low,
		j: pick
	});
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const hold = _action($scope0_id, "a1");
	_html(`<button>${_text_resume($scope0_id, "b", d)}</button>${_el_resume($scope0_id, "a")}<button>source</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: n,
		e: d,
		g: hold,
		h: _resume(async () => {
			d = 5;
			await resolveAfter(0);
		}, "a0", $scope0_id) || void 0
	});
}, 1);

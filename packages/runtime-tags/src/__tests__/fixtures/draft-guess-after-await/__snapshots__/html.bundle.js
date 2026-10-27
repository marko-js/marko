// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = 1;
	const set = _action($scope0_id, "a2");
	const outer = _action($scope0_id, "a3");
	_html(`<button>${_text_resume($scope0_id, "b", d)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d,
		f: set,
		h: outer,
		g: _resume(async () => {
			d = 9;
			await resolveAfter(0, 2);
		}, "a0", $scope0_id) || void 0,
		i: _resume(async () => {
			await resolveAfter(0, 1);
			set();
		}, "a1", $scope0_id) || void 0
	});
}, 1);

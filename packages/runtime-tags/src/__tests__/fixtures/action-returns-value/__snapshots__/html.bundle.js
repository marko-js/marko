// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let result = 0;
	const double = _action($scope0_id, "a3");
	const busy = _action($scope0_id, "a4");
	const bump = _action($scope0_id, "a5");
	_html(`<button>${_text_resume($scope0_id, "b", result)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		c: result,
		d: double,
		f: busy,
		h: bump,
		e: _resume((x) => x * 2, "a1") || void 0,
		g: void 0,
		i: _resume(function(by) {
			result += by;
		}, "a2", $scope0_id) || void 0
	});
}, 1);

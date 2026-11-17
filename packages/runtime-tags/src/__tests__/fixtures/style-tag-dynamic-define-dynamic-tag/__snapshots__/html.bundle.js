// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("a1", ({ color }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_style_html(`--M_a0:${_escape_style_value(color)};`)}${_el_mark($scope1_id, "a", _write_guard($scope1_reason, 0))}<div class=box>Hi</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.show ? Box : null, { color: input.color }, 0, 0, _write_guard($scope0_reason, 0));
	_html("<span>after</span>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.show,
		e: _write_if($scope0_reason, 1) && input.color,
		f: Box
	});
}, 1);

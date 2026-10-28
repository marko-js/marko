// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("a0", ({ show, label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button>${_text_resume($scope1_id, "b", show ? label + n : "-")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: show,
			f: label,
			g: n
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", Box, {
		show: input.show,
		label: input.label
	}, 0, 0, $wg__input_show__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.show,
		e: _write_if($scope0_reason, 1) && input.label,
		f: Box
	});
}, 1);

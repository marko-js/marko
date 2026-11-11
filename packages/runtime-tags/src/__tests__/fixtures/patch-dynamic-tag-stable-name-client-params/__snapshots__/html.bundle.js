// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("a0", ({ show, label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_patch_write($scope1_id, "xe", show);
		_patch_write($scope1_id, "xf", label);
		let n = 0;
		_html(`<button>${_text_mark($scope1_id, "b", show ? label + n : "-")}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_render($scope1_id, "a2", "e f");
		_scope($scope1_id, {
			e: show,
			f: label,
			g: n
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", Box, {
		show: input.show,
		label: input.label
	}, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0, 0, 0, 0);
	_patch_render($scope0_id, "a3", (($fg__input_show ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_show__OR__input_label && input.show,
		e: _write_if($scope0_reason, 1) && $ui__input_show__OR__input_label && input.label,
		f: $ui__input_show__OR__input_label && Box
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);

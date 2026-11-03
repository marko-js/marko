// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("__tests__/template.marko_1*content", ({ show, label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button>${_text_resume($scope1_id, "#text/1", show ? label + n : "-")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			show,
			label,
			n
		}, "__tests__/template.marko", "1:2", {
			show: "1:15",
			label: "1:21",
			n: "2:8"
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", Box, {
		show: input.show,
		label: input.label
	}, 0, 0, $wg__input_show__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 2) && input.show,
		input_label: _write_if($scope0_reason, 1) && input.label,
		Box
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		Box: "1:9"
	});
}, 1);

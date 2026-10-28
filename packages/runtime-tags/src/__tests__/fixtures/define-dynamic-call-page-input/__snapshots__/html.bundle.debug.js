// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_other = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__label2 = _write_guard($scope3_reason, 0);
		_html(`<i>${_text_resume($scope3_id, "#text/0", label, $wg__label2)}</i>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 4) << 5);
	const $childScope = _peek_scope_id();
	Panel.content({
		isOpen: open,
		label: input.label
	});
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: input.show,
		label: input.label + "!"
	}, 0, 0, _write_guard($scope0_reason, 3));
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 2) && input.label,
		input_show: _write_if($scope0_reason, 0) && input.show,
		open,
		Panel: $wi__input_other && Panel,
		Other: $wi__input_other && Other,
		Tag: _write_if($scope0_reason, 1) && Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_show: ["input.show"],
		open: "1:6",
		Panel: "2:9",
		Other: "7:9",
		Tag: "11:8"
	});
}, 1);

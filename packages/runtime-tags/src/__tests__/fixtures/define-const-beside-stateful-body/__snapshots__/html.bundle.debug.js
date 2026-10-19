// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/tags/child.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { label }, "__tests__/tags/child.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
	const $childScope = _peek_scope_id();
	Panel.content({
		isOpen: true,
		label: input.label
	});
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _write_if($scope0_reason, 1) && Panel,
		Tag,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "8:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	child_default({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

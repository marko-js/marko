// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content("a0", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", label, $wg__label)}</em>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { e: label });
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	Panel.content({
		isOpen: input.show,
		label: input.label
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.show,
		g: open,
		a: _existing_scope($childScope)
	});
}, 1);

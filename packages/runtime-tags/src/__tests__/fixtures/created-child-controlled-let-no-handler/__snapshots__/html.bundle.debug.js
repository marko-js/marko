// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 1;
			_html(`<button>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1");
			_scope($scope1_id, {
				count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"TagVariableChange:count": input.on || void 0
			}, "__tests__/tags/child.marko", "1:2", {
				count: "2:8",
				"TagVariableChange:count": ["countChange", "2:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_on: input.on }, "__tests__/tags/child.marko", 0, { input_on: ["input.on"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_show__OR__input_on << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		show: input.show,
		on: input.on
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

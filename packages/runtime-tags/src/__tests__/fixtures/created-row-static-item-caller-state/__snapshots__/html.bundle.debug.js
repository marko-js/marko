// tags/rows.marko
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label + x, $wg__input_label)}</em>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/rows.marko", "1:2", { x: "1:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_label, 0, 0, 0, 1);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			rows_default({ label: l });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { l }, "__tests__/template.marko", 0, { l: "1:6" });
}, 1);

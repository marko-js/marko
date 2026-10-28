// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (r) => {
		const $scope1_id = _scope_id();
		_html(`<div${_attr("title", input.label)}>${_text_resume($scope1_id, "#text/1", r)}</div>${_el_resume($scope1_id, "#div/0", _write_guard($scope0_reason, 0))}`);
		_scope($scope1_id, {}, "__tests__/tags/outer.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/outer.marko", 0, { input_label: ["input.label"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<h1>Rows reading a request value</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			outer_default({ label: input.label });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);

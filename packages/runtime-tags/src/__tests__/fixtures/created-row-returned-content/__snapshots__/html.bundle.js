// tags/maker.marko
var maker_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	return { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>made</em>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_scope($scope1_id, {});
	}, $scope0_id) };
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 2), $wg__input_rows = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let L = maker_default({});
		_dynamic_tag($scope1_id, "c", input.tag, { content: L }, 0, 0, $wg__input_tag);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			d: $wi__input_tag && L,
			_: $wi__input_tag && _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_rows);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.tag });
}, 1);

// tags/maker.marko
var maker_default = _template("__tests__/tags/maker.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Label = { content: _content_resume("__tests__/tags/maker.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>made</em>${_el_mark($scope1_id, "#em/0")}`);
		_script($scope1_id, "__tests__/tags/maker.marko_1");
		_scope($scope1_id, {}, "__tests__/tags/maker.marko", "1:2");
	}, $scope0_id) };
	const $return = Label;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 2), $wg__input_rows = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let L = maker_default({});
		_dynamic_tag($scope1_id, "#text/2", input.tag, { content: L }, 0, 0, $wg__input_tag);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			L: $wi__input_tag && L,
			_: $wi__input_tag && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { L: "2:10" });
	}, "id", $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_rows);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_tag: input.tag }, "__tests__/template.marko", 0, { input_tag: ["input.tag"] });
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>body</label><input${_attr("id", uid)}>`);
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "#text/0", Tag, { content: Body }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, { Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);

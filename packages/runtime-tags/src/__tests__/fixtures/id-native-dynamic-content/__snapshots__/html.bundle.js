// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>body</label><input${_attr("id", uid)}>`);
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "a", Tag, { content: Body }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, { e: Body });
}, 1);

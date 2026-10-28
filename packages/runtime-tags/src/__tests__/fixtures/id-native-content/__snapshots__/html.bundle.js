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
		_html("<div>");
		_attr_content("a", $scope2_id, Body, 0);
		_html("</div>");
		$wi__input_items && _scope($scope2_id, {});
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html("<section");
		_attrs_content({ content: Body }, "a", $scope3_id, "section");
		_html(`</section>${_el_resume($scope3_id, "a")}`);
		_script($scope3_id, "a1");
		_scope($scope3_id, {});
	}, 0, $scope0_id, "b", $wg__input_items, $wg__input_items, 0, 0, 1);
	$wi__input_items && _scope($scope0_id, { f: Body });
}, 1);

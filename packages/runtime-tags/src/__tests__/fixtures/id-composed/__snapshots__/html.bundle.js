// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 1), $wg__input_headingId = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label><input${_attr("id", uid)}${_attr("aria-describedby", input.headingId)}>${_el_resume($scope0_id, "c", $wg__input_headingId)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2), $wi__input_visible__OR__input_items = _write_if($scope0_reason, 0), $wg__input_visible = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const headingId = _id();
	_html(`<h2${_attr("id", headingId)}>Fields</h2>`);
	_if(() => {
		if (input.visible !== false) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				field_default({
					name: item.key,
					headingId
				});
				field_default({
					name: item.key,
					headingId
				});
				$wi__input_visible__OR__input_items && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, "key", $scope1_id, "a", $wg__input_items, $wg__input_items);
			$wi__input_visible__OR__input_items && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_visible);
	$wi__input_visible__OR__input_items && _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.items,
		g: headingId
	});
}, 1);

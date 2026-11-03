// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "#input/2", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_inner__closures = new Set();
		_await($scope1_id, "#text/0", item.outer, (outer) => {
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", item.inner, (inner) => {
				const $scope3_id = _scope_id();
				_set_scope_reason($wg__input_items << 3 | $wg__input_items << 7);
				const $childScope = _peek_scope_id();
				field_default({ name: inner });
				$wi__input_items && _scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:6");
			}, $wg__input_items);
			$wi__input_items && _subscribe($for_content__item_inner__closures, _scope($scope2_id, {}, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_item_inner#1:4/subscribe", 0);
			$wi__input_items && _resume_branch($scope2_id);
		}, $wg__input_items);
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_inner/5": $for_content__item_inner__closures }, "__tests__/template.marko", "1:2");
	}, "key", $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

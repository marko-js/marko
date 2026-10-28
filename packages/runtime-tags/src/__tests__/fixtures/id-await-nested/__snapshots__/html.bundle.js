// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_inner__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", item.outer, (outer) => {
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", item.inner, (inner) => {
				const $scope3_id = _scope_id();
				_set_scope_reason($wg__input_items << 3 | $wg__input_items << 7);
				const $childScope = _peek_scope_id();
				field_default({ name: inner });
				$wi__input_items && _scope($scope3_id, { a: _existing_scope($childScope) });
			}, $wg__input_items);
			$wi__input_items && _subscribe($for_content__item_inner__closures, _scope($scope2_id, {}), "a0", 0);
			$wi__input_items && _resume_branch($scope2_id);
		}, $wg__input_items);
		$wi__input_items && _scope($scope1_id, { f: $for_content__item_inner__closures });
	}, "key", $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {});
}, 1);

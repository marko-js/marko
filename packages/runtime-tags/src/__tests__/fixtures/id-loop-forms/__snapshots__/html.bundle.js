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
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 2), $wg__input_record = _write_guard($scope0_reason, 3), $wi__input_record = _write_if($scope0_reason, 3), $wg__input_end__OR__input_start = _write_guard($scope0_reason, 0), $wi__input_end__OR__input_start = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id();
	_html(`<h1${_attr("id", heading)}>Fields</h1>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_items << 3 | $wg__input_items << 7);
		const $childScope = _peek_scope_id();
		field_default({
			name: item.key,
			heading
		});
		$wi__input_items && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "b", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		field_default({
			name: item.key,
			heading
		});
		$wi__input_items && _scope($scope2_id, {});
	}, "key", $scope0_id, "c", $wg__input_items, $wg__input_items);
	_for_in(input.record, (key, value) => {
		const $scope3_id = _scope_id();
		field_default({
			name: key,
			heading
		});
		$wi__input_record && _scope($scope3_id, {});
	}, 0, $scope0_id, "d", $wg__input_record, $wg__input_record);
	_for_in(input.record, (key, value) => {
		const $scope4_id = _scope_id();
		_set_scope_reason($wg__input_record << 3 | $wg__input_record << 7);
		const $childScope2 = _peek_scope_id();
		field_default({
			name: value,
			heading
		});
		$wi__input_record && _scope($scope4_id, { a: _existing_scope($childScope2) });
	}, (key) => "key-" + key, $scope0_id, "e", $wg__input_record, $wg__input_record);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope5_id = _scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope5_id, {});
	}, 0, $scope0_id, "f", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope6_id = _scope_id();
		_set_scope_reason($wg__input_end__OR__input_start << 3 | $wg__input_end__OR__input_start << 7);
		const $childScope3 = _peek_scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope6_id, { a: _existing_scope($childScope3) });
	}, (i) => "to-" + i, $scope0_id, "g", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope7_id = _scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope7_id, {});
	}, 0, $scope0_id, "h", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope8_id = _scope_id();
		_set_scope_reason($wg__input_end__OR__input_start << 3 | $wg__input_end__OR__input_start << 7);
		const $childScope4 = _peek_scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope8_id, { a: _existing_scope($childScope4) });
	}, (i) => "until-" + i, $scope0_id, "i", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		n: _write_if($scope0_reason, 5) && input.end,
		o: _write_if($scope0_reason, 4) && input.start,
		q: heading
	});
}, 1);

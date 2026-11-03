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
		$wi__input_items && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/1", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		field_default({
			name: item.key,
			heading
		});
		$wi__input_items && _scope($scope2_id, {}, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/2", $wg__input_items, $wg__input_items);
	_for_in(input.record, (key, value) => {
		const $scope3_id = _scope_id();
		field_default({
			name: key,
			heading
		});
		$wi__input_record && _scope($scope3_id, {}, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/3", $wg__input_record, $wg__input_record);
	_for_in(input.record, (key, value) => {
		const $scope4_id = _scope_id();
		_set_scope_reason($wg__input_record << 3 | $wg__input_record << 7);
		const $childScope2 = _peek_scope_id();
		field_default({
			name: value,
			heading
		});
		$wi__input_record && _scope($scope4_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "5:2");
	}, (key) => "key-" + key, $scope0_id, "#text/4", $wg__input_record, $wg__input_record);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope5_id = _scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope5_id, {}, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/5", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope6_id = _scope_id();
		_set_scope_reason($wg__input_end__OR__input_start << 3 | $wg__input_end__OR__input_start << 7);
		const $childScope3 = _peek_scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope6_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "7:2");
	}, (i) => "to-" + i, $scope0_id, "#text/6", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope7_id = _scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope7_id, {}, "__tests__/template.marko", "8:2");
	}, 0, $scope0_id, "#text/7", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope8_id = _scope_id();
		_set_scope_reason($wg__input_end__OR__input_start << 3 | $wg__input_end__OR__input_start << 7);
		const $childScope4 = _peek_scope_id();
		field_default({
			name: i,
			heading
		});
		$wi__input_end__OR__input_start && _scope($scope8_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "9:2");
	}, (i) => "until-" + i, $scope0_id, "#text/8", $wg__input_end__OR__input_start, $wg__input_end__OR__input_start);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_end: _write_if($scope0_reason, 5) && input.end,
		input_start: _write_if($scope0_reason, 4) && input.start,
		heading
	}, "__tests__/template.marko", 0, {
		input_end: ["input.end"],
		input_start: ["input.start"],
		heading: "1:5"
	});
}, 1);

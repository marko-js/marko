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
	const $scope0_reason = _scope_reason(), $wg__input_heading__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const heading = input.heading || _id();
	const second = _id();
	_html(`<h1${_attr("id", heading)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", _write_guard($scope0_reason, 1))}<label${_attr("for", second)}>second</label><input${_attr("id", second)}>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_heading__OR__input_items << 1 | $wg__input_heading__OR__input_items << 3 | $wg__input_items << 5);
		const $childScope = _peek_scope_id();
		field_default({
			name: item.key,
			uid: item.uid,
			heading
		});
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/3", $wg__input_heading__OR__input_items, $wg__input_items);
	let local = "given";
	const localId = local || _id();
	_html(`<label${_attr("for", localId)}>local</label>${_el_resume($scope0_id, "#label/4")}<input${_attr("id", localId)}>${_el_resume($scope0_id, "#input/5")}<button>toggle</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		heading: _write_if($scope0_reason, 2) && heading,
		local
	}, "__tests__/template.marko", 0, {
		heading: "1:5",
		local: "4:6"
	});
}, 1);

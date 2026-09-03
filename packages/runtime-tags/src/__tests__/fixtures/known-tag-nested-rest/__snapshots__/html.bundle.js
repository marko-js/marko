// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_data_val = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>val ${_text_resume($scope0_id, "a", input.data.val, $sg__input_data_val * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/mid.marko
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_first = _serialize_guard($scope0_reason, 1), $sg__input_group_keep = _serialize_guard($scope0_reason, 2), $sg__rest = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const { first, group: { keep, ...rest } } = input;
	_html(`<p>${_text_resume($scope0_id, "a", first, $sg__input_first)} ${_text_resume($scope0_id, "b", keep, $sg__input_group_keep * 2)}</p>`);
	_set_serialize_reason($sg__rest);
	const $childScope = _peek_scope_id();
	leaf_default({ data: rest });
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { c: _serialize_if($scope0_reason, 3) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(26);
	const $childScope = _peek_scope_id();
	mid_default({
		first: "f",
		group: {
			keep: "k",
			val: n
		}
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
}, 1);

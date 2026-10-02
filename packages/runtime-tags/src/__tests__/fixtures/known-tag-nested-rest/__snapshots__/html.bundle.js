// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_data_val = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>val ${_text_resume($scope0_id, "a", input.data.val, $wg__input_data_val * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/mid.marko
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 1), $wg__input_group_keep = _write_guard($scope0_reason, 2), $wg__rest = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const { group: { keep, ...rest } } = input;
	_html(`<p>${_text_resume($scope0_id, "a", input.first, $wg__input_first)} ${_text_resume($scope0_id, "b", keep, $wg__input_group_keep * 2)}</p>`);
	_set_scope_reason($wg__rest << 1);
	const $childScope = _peek_scope_id();
	leaf_default({ data: rest });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { c: _write_if($scope0_reason, 3) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(162);
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

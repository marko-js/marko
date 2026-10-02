// tags/leaf.marko
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_data_val = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>val ${_text_resume($scope0_id, "#text/0", input.data.val, $wg__input_data_val * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/leaf.marko", 0);
});

// tags/mid.marko
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 1), $wg__input_group_keep = _write_guard($scope0_reason, 2), $wg__rest = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const { group: { keep, ...rest } } = input;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.first, $wg__input_first)} ${_text_resume($scope0_id, "#text/1", keep, $wg__input_group_keep * 2)}</p>`);
	_set_scope_reason($wg__rest << 1);
	const $childScope = _peek_scope_id();
	leaf_default({ data: rest });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/2": _write_if($scope0_reason, 3) && _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(162);
	const $childScope = _peek_scope_id();
	mid_default({
		first: "f",
		group: {
			keep: "k",
			val: n
		}
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

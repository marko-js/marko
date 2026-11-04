// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_uid = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_mark($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_mark($scope0_id, "a", $uf__input_uid)}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_mark($scope0_id, "c", $uf__input_uid || _updates_from($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a; b%b%b%b%b%b%b%b%;<h1>Fields</h1><!><!><!><!><!><!><!><!><!>",
	a0: `a0${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a7: `a7${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items__OR__input_record__OR__input_end__OR__input_start = _client_guard($scope0_reason, 1), $uf__input_end__OR__input_start = _updates_from($scope0_reason, 0), $ui__input_end__OR__input_start = _unfilled_if($scope0_reason, 0), $ui__input_start = _unfilled_if($scope0_reason, 5), $ui__input_end = _unfilled_if($scope0_reason, 4), $fg__input_end = _filled_guard($scope0_reason, 4), $fg__input_start = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "a", 0, 0)}>Fields</h1>${_el_mark($scope0_id, "a", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 2) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({
			name: item.key,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a0", $scope0_reason, 2);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		field_default({
			name: item.key,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope2_id, { a: _existing_scope($childScope2) });
	}, "key", $scope0_id, "c", 1, 1, 1, 0, 0, "a1", $scope0_reason, 2);
	_for_in(input.record, (key, value) => {
		const $scope3_id = _scope_id();
		_set_scope_reason(0);
		const $childScope3 = _peek_scope_id($scope3_id, "a", 2);
		field_default({
			name: key,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope3_id, { a: _existing_scope($childScope3) });
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 0, "a2", $scope0_reason, 3);
	_for_in(input.record, (key, value) => {
		const $scope4_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 3) << 3);
		const $childScope4 = _peek_scope_id($scope4_id, "a", 3);
		field_default({
			name: value,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope4_id, { a: _existing_scope($childScope4) });
	}, (key) => "key-" + key, $scope0_id, "e", 1, 1, 1, 0, 0, "a3", $scope0_reason, 3);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope5_id = _scope_id();
		_set_scope_reason(0);
		const $childScope5 = _peek_scope_id($scope5_id, "a", 4);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope5_id, { a: _existing_scope($childScope5) });
	}, 0, $scope0_id, "f", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope6_id = _scope_id();
		_set_scope_reason($uf__input_end__OR__input_start << 3);
		const $childScope6 = _peek_scope_id($scope6_id, "a", 5);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope6_id, { a: _existing_scope($childScope6) });
	}, (i) => "to-" + i, $scope0_id, "g", 1, 1, 1, 0, 0, "a5", $scope0_reason, 0);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope7_id = _scope_id();
		_set_scope_reason(0);
		const $childScope7 = _peek_scope_id($scope7_id, "a", 6);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope7_id, { a: _existing_scope($childScope7) });
	}, 0, $scope0_id, "h", 1, 1, 1, 0, 0, "a6", $scope0_reason, 0);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope8_id = _scope_id();
		_set_scope_reason($uf__input_end__OR__input_start << 3);
		const $childScope8 = _peek_scope_id($scope8_id, "a", 7);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		!$cg__input_items__OR__input_record__OR__input_end__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wq", heading);
		_scope($scope8_id, { a: _existing_scope($childScope8) });
	}, (i) => "until-" + i, $scope0_id, "i", 1, 1, 1, 0, 0, "a7", $scope0_reason, 0);
	_patch_render($scope0_id, "a8", (($fg__input_end ? " n" : "") + ($fg__input_start ? " o" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		n: ($ui__input_start || $ui__input_end__OR__input_start) && input.end,
		o: ($ui__input_end || $ui__input_end__OR__input_start) && input.start,
		q: _unfilled_if($scope0_reason, 1) && heading
	}) || ($fg__input_end && $ui__input_start && _patch_write($scope0_id, "xn", input.end, !_server_guard($scope0_reason, 4)), $fg__input_start && $ui__input_end && _patch_write($scope0_id, "xo", input.start, !_server_guard($scope0_reason, 5)));
}, 1);

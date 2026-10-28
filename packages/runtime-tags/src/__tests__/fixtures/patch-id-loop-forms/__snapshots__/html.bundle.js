// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "ac$id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "ac$aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !; b%b%b%b%b%b%b%b%;<h1>Fields</h1><!><!><!><!><!><!><!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a5: /*@__PURE__*/ ((_w0) => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a6: /*@__PURE__*/ ((_w0) => `a6${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a7: /*@__PURE__*/ ((_w0) => `a7${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "aa$id", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "a", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({
			name: item.key,
			heading
		});
		_patch_child_end();
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
		_scope($scope3_id, { a: _existing_scope($childScope3) });
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 0, "a2", $scope0_reason, 3);
	_for_in(input.record, (key, value) => {
		const $scope4_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
		const $childScope4 = _peek_scope_id($scope4_id, "a", 3);
		field_default({
			name: value,
			heading
		});
		_patch_child_end();
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
		_scope($scope5_id, { a: _existing_scope($childScope5) });
	}, 0, $scope0_id, "f", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope6_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
		const $childScope6 = _peek_scope_id($scope6_id, "a", 5);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
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
		_scope($scope7_id, { a: _existing_scope($childScope7) });
	}, 0, $scope0_id, "h", 1, 1, 1, 0, 0, "a6", $scope0_reason, 0);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope8_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
		const $childScope8 = _peek_scope_id($scope8_id, "a", 7);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		_scope($scope8_id, { a: _existing_scope($childScope8) });
	}, (i) => "until-" + i, $scope0_id, "i", 1, 1, 1, 0, 0, "a7", $scope0_reason, 0);
	_scope($scope0_id, {
		n: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.end,
		o: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.start,
		q: _unfilled_if($scope0_reason, 1) && heading
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va8", input.end, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va9", input.start, !_server_guard($scope0_reason, 5)));
}, 1);

// tags/field.marko
const $template = "<label>field</label><input>";
const $walks = " b b";
const $setup$1 = [[], []];
_shells({ b: "b; b ;<label>field</label><input>" });
var field_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", uid, 0, 0)}>field</label>${_el_resume($scope0_id, "a", 0)}<input${_patch_attr($scope0_id, "ab$id", "id", uid, 0, 0)}>${_el_resume($scope0_id, "b", 0)}`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1], ["c>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b%b/${_w0}&/${_w1}&%c`)($walks, $walks)};${((_w0, _w1) => `<!><!>${_w0}${_w1}<!><!>`)($template, $template)}`)(),
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template)}`)(),
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$1], ["b>", $setup$1], ["c>", $setup$1], ["d>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&`)($walks, $walks, $walks, $walks)};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}`)($template, $template, $template, $template)}`)(),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup$1], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks, $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)(),
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode === 0) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			field_default({});
			_patch_child_end();
			_if(() => {
				if (input.nested) {
					const $scope4_id = _scope_id();
					const $childScope2 = _patch_child($scope4_id, "a", 1);
					field_default({});
					_patch_child_end();
					const $childScope3 = _patch_child($scope4_id, "b", 2);
					field_default({});
					_patch_child_end();
					_scope($scope4_id, {
						a: _existing_scope($childScope2),
						b: _existing_scope($childScope3)
					});
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else if (input.mode === 1) {
			const $scope2_id = _scope_id();
			const $childScope4 = _patch_child($scope2_id, "a", 0);
			field_default({});
			_patch_child_end();
			const $childScope5 = _patch_child($scope2_id, "b", 1);
			field_default({});
			_patch_child_end();
			const $childScope6 = _patch_child($scope2_id, "c", 2);
			field_default({});
			_patch_child_end();
			const $childScope7 = _patch_child($scope2_id, "d", 3);
			field_default({});
			_patch_child_end();
			_scope($scope2_id, {
				a: _existing_scope($childScope4),
				b: _existing_scope($childScope5),
				c: _existing_scope($childScope6),
				d: _existing_scope($childScope7)
			});
			return 1;
		} else {
			const $scope3_id = _scope_id();
			const $childScope8 = _patch_child($scope3_id, "a", 0);
			field_default({});
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope8) });
			return 2;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, [
		"a1",
		"a2",
		"a3"
	], $scope0_reason, 0);
	const $childScope9 = _patch_child($scope0_id, "b", 4);
	field_default({});
	_patch_child_end();
	const $childScope10 = _patch_child($scope0_id, "c", 5);
	field_default({});
	_patch_child_end();
	_if(() => {
		if (input.other) {
			const $scope5_id = _scope_id();
			const $childScope11 = _patch_child($scope5_id, "a", 6);
			field_default({});
			_patch_child_end();
			_scope($scope5_id, { a: _existing_scope($childScope11) });
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a4"], $scope0_reason, 2);
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.nested,
		b: _existing_scope($childScope9),
		c: _existing_scope($childScope10)
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.nested, !_server_guard($scope0_reason, 1));
}, 1);

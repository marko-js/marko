// tags/child.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1 b3; ;<div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html(`<div></div>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["b1"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wg", value?.b, 1);
	_scope($scope0_id, { g: value?.b });
});

// template.marko
_shells({
	a: "a !a1; D l%;<button class=inc> </button><!><!>",
	a0: `a0${_shell_marker([["a3"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				data: { b: count },
				on: true
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: count });
}, 1);

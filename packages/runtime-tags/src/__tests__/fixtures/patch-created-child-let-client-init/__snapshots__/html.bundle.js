// tags/child.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.count + 10;
	_html(`<span>${_text_resume($scope0_id, "a", n, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</span>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", n, 1);
	_scope($scope0_id, { e: n });
});

// template.marko
_shells({
	a: "a !a1; D l%;<button> </button><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ count });
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

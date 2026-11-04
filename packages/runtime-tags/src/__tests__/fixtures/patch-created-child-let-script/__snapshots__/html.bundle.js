// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b !,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0);
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { a: count });
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: `a0${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			probe_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);

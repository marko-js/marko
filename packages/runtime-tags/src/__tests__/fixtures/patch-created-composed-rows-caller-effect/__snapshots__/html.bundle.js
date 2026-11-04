// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0, $fg__input_label);
	_scope($scope0_id, { c: input.label }) || $fg__input_label && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: `a0${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		probe_default({ label: item.name });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);

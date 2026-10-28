// tags/label.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "d");
	_scope($scope0_id, { d: input.get }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0&b/${_w0}&`)(" b")};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content("a1", ({ text }) => {
		_scope_id();
		_scope_reason();
		return text + "!";
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $cg__input_v && 1);
	let row = Row.content({ text: input.v });
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", row, !_server_guard($scope0_reason, 0));
	$cg__input_v && _var($scope0_id, "b", $childScope, "a2");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	label_default({ get: _bind_resume(function() {
		return row;
	}, "a0", $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		g: row,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);

// tags/label.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	_scope($scope0_id, { d: input.get }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const title = input.title + "!";
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", title, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_default({ get: _bind_resume(function() {
		return title;
	}, "a0", $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		e: title,
		a: _existing_scope($childScope)
	});
}, 1);

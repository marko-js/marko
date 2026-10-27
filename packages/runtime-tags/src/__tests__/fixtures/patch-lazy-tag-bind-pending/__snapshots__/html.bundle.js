// child.marko
const $template = "<button>go</button>";
const $setup$1 = [[], ["a1"]];
_shells({ a: "a !a1; ;<button>go</button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
	const handler = _bind_resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "a", $scope0_id, "button", void 0, $scope0_reason, 0)}>go</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: input.title });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)(" b")};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Child_withLoadAssets({ title: input.title });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);

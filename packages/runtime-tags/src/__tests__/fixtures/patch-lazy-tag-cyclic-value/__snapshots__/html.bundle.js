// tagged.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["a0"]];
_shells({ a: "a !a0; D ;<button> </button>" });
var tagged_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "b", "", void 0, 0, 0, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: input.node }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.node, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Tagged_withLoadAssets = withLoadAssets(() => tagged_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const node = (() => {
		const n = {
			name: input.name,
			self: null
		};
		n.self = n;
		return n;
	})();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Tagged_withLoadAssets({ node });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);

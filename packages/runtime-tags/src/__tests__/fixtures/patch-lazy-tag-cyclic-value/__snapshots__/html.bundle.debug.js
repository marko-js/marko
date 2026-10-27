// tagged.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
function describe(n) {
	return n.name + "/" + n.self.name;
}
const $setup$1 = [[], ["__tests__/tagged.marko_0"]];
_shells({ "__tests__/tagged.marko": "__tests__/tagged.marko !__tests__/tagged.marko_0; D ;<button> </button>" });
var tagged_default = _template("__tests__/tagged.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "";
	_html(`<button>${_patch_text($scope0_id, "#text/1", label, void 0, 0, 0, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tagged.marko_0");
	_scope($scope0_id, { input_node: input.node }, "__tests__/tagged.marko", 0, { input_node: ["input.node"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_node", input.node, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Tagged_withLoadAssets = withLoadAssets(() => tagged_default, "__tests__/tagged.marko", flush, "ready:__tests__/tagged.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
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
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	$Tagged_withLoadAssets({ node });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

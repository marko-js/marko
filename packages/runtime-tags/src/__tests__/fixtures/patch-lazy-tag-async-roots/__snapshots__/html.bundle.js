// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b2: /*@__PURE__*/ (() => `b2${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b3: /*@__PURE__*/ (() => `b3${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b: "b;D%b%;<main><!><!></main>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "a", input.first, (first) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		$Child_withLoadAssets({ label: first });
		_patch_child_end();
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, 1, "b1", 1);
	_await($scope0_id, "b", input.second, (second) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope2 = _peek_scope_id($scope2_id, "b", 1);
		$Child_withLoadAssets({ label: second });
		_patch_child_end();
		_scope($scope2_id, { b: _existing_scope($childScope2) });
	}, 1, "b0", 1);
	_html("</main>");
}, 1);

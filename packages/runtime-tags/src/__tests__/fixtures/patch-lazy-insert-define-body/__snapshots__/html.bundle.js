// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button class=child><!>:<!></button>" });
var lazy_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks);
const $Row_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template);
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
_shells({
	b: "b !b2; b%b%;<button class=open>open</button><!><!><!>",
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], [">a>", _shell_setup([[], []], ["b>", $setup])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content("b0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "b", 0);
		$Lazy_withLoadAssets({ label });
		_patch_child_end();
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, $scope0_id) };
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope2_id, "a", 1);
			Row.content({ label: "s" });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	if ($scope0_page) _if(() => {}, $scope0_id, "c");
	_script($scope0_id, "b2");
	_scope($scope0_id, {});
}, 1);

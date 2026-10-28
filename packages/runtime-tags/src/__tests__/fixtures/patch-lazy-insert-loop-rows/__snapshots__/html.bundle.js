// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button class=child><!>:<!></button>" });
var lazy_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
_shells({
	b: "b !b1; b%b%;<button class=open>open</button><!><!><!>",
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = [];
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Lazy_withLoadAssets({ label: "s" });
			_patch_child_end();
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope2 = _peek_scope_id($scope2_id, "b", 1);
		$Lazy_withLoadAssets({ label: item });
		_patch_child_end();
		_scope($scope2_id, { b: _existing_scope($childScope2) });
	}, 0, $scope0_id, "c");
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: items });
}, 1);

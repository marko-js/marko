// lazy.marko
const $template$1 = "<button class=child><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$2 = [[], ["a0"]];
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

// tags/opener.marko
const $template = "<button class=open>open</button><!><!>";
const $walks = " b%c";
withLoadAssets(() => lazy_default, "a", flush, "_a");
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; b%;<button class=open>open</button><!><!>" });
var opener_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", open, 1);
	_scope($scope0_id, { c: open });
});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)($walks)};${((_w0) => `${_w0}<!><!>`)($template)}`)(),
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0);
	opener_default({});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			$Lazy_withLoadAssets({ label: "s" });
			_patch_child_end();
			_scope($scope1_id, { b: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

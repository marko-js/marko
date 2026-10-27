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
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
_shells({
	b3: /*@__PURE__*/ (() => `b3${_shell_marker(_shell_setup([["b10"], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b: "b !b7; b%;<button class=open>inc</button><!><!>",
	b4: /*@__PURE__*/ (() => `b4${_shell_marker(_shell_setup([["b10"], []], ["b>", $setup]))};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b5: "b5;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_filled_guard($scope0_reason, 1) && _patch_fill($scope2_id, "vb1", x);
				_set_scope_reason(6);
				const $childScope = _patch_child($scope2_id, "b", 0);
				$Lazy_withLoadAssets({ label: x + n });
				_patch_child_end();
				_script($scope2_id, "b0");
				_subscribe($n__closures, _scope($scope2_id, {
					d: x,
					b: _existing_scope($childScope)
				}), "b2");
			}, 1, "b3");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b6");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b5"], $scope0_reason, 0);
	_script($scope0_id, "b7");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n,
		i: $n__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb8", input.label, !$sg__input_label);
}, 1);

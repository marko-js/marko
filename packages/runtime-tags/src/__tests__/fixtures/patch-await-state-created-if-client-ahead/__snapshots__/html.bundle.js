// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
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
	b: "b !b4; b%;<button class=open>inc</button><!><!>",
	b3: /*@__PURE__*/ (() => `b3;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	b2: "b2 b8 b9;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(6);
				const $childScope = _peek_scope_id($scope2_id, "b", 0);
				$Lazy_withLoadAssets({ label: input.label + x });
				_patch_child_end();
				_script($scope2_id, "b0");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					d: x,
					b: _existing_scope($childScope)
				}), "b1");
			}, 1, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b2"], $scope0_reason, 0);
	_script($scope0_id, "b4");
	_scope($scope0_id, {
		f: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb5", input.label, !_server_guard($scope0_reason, 1));
}, 1);

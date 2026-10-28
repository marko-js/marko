// tags/panel.marko
const $Info_content__walks = "D%c%l";
const $Info_content__template = "<p><!>:<!></p>";
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D%c%;<p><!>:<!></p>",
	b: "b !;b%;<!><!><!>",
	b3: /*@__PURE__*/ (() => `b3 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const Info = { content: _content("b0", ({ id }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", id, 1, $scope1_reason, 0)}:${_text_resume($scope1_id, "b", input.n, 2, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_n ? "b1" : "b2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_n && "b2");
	}, $scope0_id, 1) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0, 0, $scope0_id);
			Info.content({ id: "x" });
			_patch_child_end();
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.n,
		f: _write_if($scope0_reason, 1) && $input_n__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb4", input.n, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		n: count,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);

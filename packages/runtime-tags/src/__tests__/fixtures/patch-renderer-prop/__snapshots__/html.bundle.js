// tags/panel/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, void 0, void 0, void 0, ["b1"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.body }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "vb2", input.body, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.body));
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const extra = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "a", 0);
	panel_default({
		body: extra,
		open: true
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		h: _write_if($scope0_reason, 0) && $input_title__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 0));
}, 1);

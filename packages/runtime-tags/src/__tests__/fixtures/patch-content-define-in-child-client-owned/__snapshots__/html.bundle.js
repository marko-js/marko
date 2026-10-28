// tags/wrap.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b3: /*@__PURE__*/ ((_w0, _w1) => `b3;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	b: /*@__PURE__*/ (() => `b a>;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	b2: "b2;D ;<em> </em>"
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const Panel = { content: _content("b3", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_title ? "b0" : "b1");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }), $cg__input_title && "b1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__open, void 0, void 0, void 0, ["b2"], $scope1_reason, 0);
		($wi__input_title || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({ open: input.open });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		f: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb4", input.title, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		open: true,
		title: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);

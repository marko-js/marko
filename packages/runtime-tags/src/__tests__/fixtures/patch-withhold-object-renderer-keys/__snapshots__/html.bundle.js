// tags/card.marko
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { class: "x" }, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/holder.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	c0: "c0,<em>held</em>",
	c: "c; ;<section></section>"
});
var holder_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const frag = { content: _content_resume("c0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>held</em>");
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	$cg__input_mode && _patch_write($scope0_id, "wf", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "c1");
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && frag?.content });
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D%l b`)(" b")};${((_w0) => `${_w0}<main><!></main><button class=m>m</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let m = false;
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	holder_default({ mode: input.mode });
	_patch_child_end();
	_html("<main>");
	_dynamic_tag($scope0_id, "b", input.on ? card_default : "div", {}, 10, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ h: input.note }] : []), 0, _write_guard($scope0_reason, 2), $scope0_reason, 2);
	_html(`</main><button class=m>m</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: input.mode,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.note,
		i: m,
		a: _existing_scope($childScope),
		k: _write_if($scope0_reason, 3) && $input_note__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.mode, !_server_guard($scope0_reason, 1)), _content_withhold(input.mode), _filled_guard($scope0_reason, 3) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va5", input.note, !_server_guard($scope0_reason, 3)));
}, 1);

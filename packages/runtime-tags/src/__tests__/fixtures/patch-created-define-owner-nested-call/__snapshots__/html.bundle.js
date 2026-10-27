// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<div></div><button>x</button>";
const $walks = " b b";
const $setup = [[], ["b3"]];
_shells({
	b1: "b1;b%;<!><!><!>",
	b: "b !b3; b ;<div></div><button>x</button>",
	b2: /*@__PURE__*/ (() => `b2 >a> b8;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	const Panel = { content: _content_elide("b1", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.w, $wg__input_w)}</p>`);
				($wi__input_w || $wi__open) && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_w);
				return 0;
			}
		}, $scope1_id, "a", $wg__open, $wg__open, 0, 0, 1);
		($wi__input_w || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_html("<div>");
	_if(() => {
		if (input.w) {
			const $scope3_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _patch_child($scope3_id, "a", 0, void 0, $scope0_id);
			Panel.content({ open: k });
			_patch_child_end();
			_scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_w, void 0, void 0, void 0, ["b2"], $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_w)}<button>x</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b3");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb5", k, 1);
	_scope($scope0_id, {
		f: input.w,
		g: $wi__input_w && k,
		h: $wi__input_w && $input_w__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb4", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({
				n: input.n,
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va3", input.n, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 3)));
}, 1);

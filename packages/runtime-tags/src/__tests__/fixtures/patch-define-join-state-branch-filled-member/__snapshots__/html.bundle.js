// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
const $setup$1 = [[], ["b6"]];
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b !b6;b%b%b ;<!><!><!><button class=t>t</button>",
	b4: /*@__PURE__*/ (() => `b4 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let open = true;
	const Info = { content: _content_elide("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.a + ":" + input.b, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b1");
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b2");
		_patch_join_init($scope1_id, "b3", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">f", _filled_guard($scope0_reason, 4) && ">g");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }), $cg__input_a && "b1"), _client_guard($scope0_reason, 4) && "b2");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const $childScope = _peek_scope_id($scope3_id, "a", 0, void 0, $scope0_id);
			Info.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 5) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["b4"], $scope0_reason, 5);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "b5");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b6");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "vb9", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.b, !(_filled_guard($scope0_reason, 4) && $cg__input_a));
	_patch_fill($scope0_id, "vb10", open, 1);
	_scope($scope0_id, {
		f: input.a,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		i: open,
		j: _write_if($scope0_reason, 3) && $input_a__closures,
		k: _write_if($scope0_reason, 4) && $input_b__closures
	}) || _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb8", input.a) : _patch_fill($scope0_id, "vb7", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(2686 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 5) << 11);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		a: input.a,
		b: input.b,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

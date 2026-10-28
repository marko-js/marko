// tags/panel.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=t>t</button>`)($Row_content__template, $Row_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks);
const $setup$1 = [["a>", "b>"], ["b5"]];
_shells({
	b4: /*@__PURE__*/ ((_w0, _w1) => `b4;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	b: /*@__PURE__*/ (() => `b a> b>!b5;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=t>t</button>`)($Row_content__template, $Row_content__template)}`)(),
	b3: "b3;D ;<p> </p>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content_elide("b4", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__show = _write_guard($scope1_reason, 0), $wi__show = _write_if($scope1_reason, 0);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
				(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b0");
				(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b1");
				_patch_join_init($scope2_id, "b2", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">>f", _filled_guard($scope0_reason, 2) && ">>g");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope2_id, { _: ($wi__input_a__OR__input_b || $wi__show) && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "b0"), _client_guard($scope0_reason, 2) && "b1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__show, void 0, void 0, void 0, ["b3"], $scope1_reason, 0);
		($wi__input_a__OR__input_b || $wi__show) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	let t = true;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ show: t });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	Row.content({ show: input.show });
	_patch_child_end();
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b5");
	_filled_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "vb6", input.a) : _patch_write($scope0_id, "xf", input.a, 1);
	_filled_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "vb7", input.b) : _patch_write($scope0_id, "xg", input.b, 1);
	_patch_fill($scope0_id, "vb8", t, 1);
	_scope($scope0_id, {
		f: input.a,
		g: input.b,
		i: t,
		j: _write_if($scope0_reason, 1) && $input_a__closures,
		k: _write_if($scope0_reason, 2) && $input_b__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(38 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: input.a,
		b: n,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		a: input.a,
		b: input.b,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

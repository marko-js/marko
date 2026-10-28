// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button class=inc> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $setup = _shell_setup([[], []], ["d>", $setup$1]);
_shells({
	a5: "a5;D%b%;<b><!><!></b>",
	a6: "a6;D%b%;<b><!><!></b>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&`)($Show_content__walks, $walks)};${((_w0, _w1) => `<!><!><!>${_w0}${_w1}`)($Show_content__template, $template)}`)(),
	a7: "a7;D l%;<span> </span><!><!>",
	a4: "a4;D ;<em> </em>",
	a8: "a8;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 2), $wg__input_x = _write_guard($scope0_reason, 4), $wi__input_x = _write_if($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 3), $sg__input_a = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	const $input_x__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 2) && ($cg__input_items ? _patch_fill($scope0_id, "va20", input.a) : (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope0_id, "xg", input.a, !$sg__input_a));
	const f = _bind_resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 3) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", item, !_server_guard($scope0_reason, 3));
		const v = input.a + item;
		_filled_guard($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xf", v, !_server_guard($scope0_reason, 0));
		const g = _bind_resume(function() {
			return v;
		}, "a1", $scope1_id);
		_html(`<span>${_text_resume($scope1_id, "a", f(), 1, $scope0_reason, 2)}</span>`);
		_if(() => {
			if (input.x) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", g(), 1, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope4_id, "a3");
				_scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 1, $wg__input_x, void 0, void 0, void 0, ["a4"], $scope0_reason, 4);
		$cg__input_x && _patch_write($scope1_id, "wg", g, 1);
		$cg__input_x && _patch_init($scope1_id, "a9");
		$cg__input_a && _patch_init($scope1_id, "a10");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 3)) && _patch_join_init($scope1_id, "a11", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">g", _filled_guard($scope0_reason, 3) && "d");
		_scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && v,
			g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && g,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a7", $scope0_reason, 3);
	_await($scope0_id, "b", input.value, (v) => {
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", v, 1, $scope0_reason, 5)}${_text_resume($scope3_id, "b", f(), 2, $scope0_reason, 2)}</b>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_a ? "a12" : "a13");
		_subscribe(_unfilled_if($scope0_reason, 2) && $f2__closures, _scope($scope3_id, {}), $cg__input_a && "a13");
	}, 1, "a5", 1);
	const Show = { content: _content("a15", ({ v }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__v = _server_guard($scope2_reason, 0);
		_filled_guard($scope2_reason, 0) && _unfilled_if($scope2_reason, 0) && _patch_write($scope2_id, "xd", v, !$sg__v);
		const h = _bind_resume(function() {
			return v;
		}, "a2", $scope2_id);
		_if(() => {
			if (input.x) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_resume($scope5_id, "a", h(), 1, $scope2_reason, 0)}</i>`);
				_client_guard($scope2_reason, 0) && _patch_init($scope5_id, "a14");
				_scope($scope5_id, { _: _write_if($scope2_reason, 0) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__input_x, void 0, void 0, void 0, ["a8"], $scope0_reason, 4);
		$wi__input_x && _subscribe(_unfilled_if($scope0_reason, 4) && $input_x__closures, _scope($scope2_id, {
			d: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope2_reason, 0)) && v,
			e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope2_reason, 0)) && h,
			_: _scope_with_id($scope0_id)
		}), $cg__input_x && "a17", $wg__input_x) || _filled_guard($scope2_reason, 0) && $cg__input_x && _patch_fill($scope2_id, "va16", h, !$sg__v);
		$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	Show.content({ v: input.a });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "d", 1);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.x,
		k: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && f,
		n: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $f2__closures,
		m: $wi__input_x && $input_x__closures,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_items && _patch_fill($scope0_id, "va18", input.x, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "va19", f, !$sg__input_a));
}, 1);

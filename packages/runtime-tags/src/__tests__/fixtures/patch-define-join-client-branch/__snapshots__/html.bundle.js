// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b;b%;<!><!><!>",
	b4: `b4 >a>;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Info_content__walks)};${$Info_content__template}`
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 6), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b__OR__input_show = _unfilled_if($scope0_reason, 2), $ui__input_a__OR__input_show = _unfilled_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Info = { content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_mark($scope1_id, "a", input.a + ":" + input.b, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "b1");
		_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope1_id, "b2");
		_patch_render($scope1_id, "b3", ((_filled_guard($scope0_reason, 4) ? " >d" : "") + (_filled_guard($scope0_reason, 5) ? " >e" : "")).slice(1), $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 4) && "b1"), _client_guard($scope0_reason, 5) && "b2");
	}, $scope0_id, 0) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "a", 0, 0, $scope0_id);
			Info.content({});
			_patch_child_end();
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 6) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b4"], $scope0_reason, 6);
	_scope($scope0_id, {
		d: ($ui__input_b__OR__input_show || $ui__input_a__OR__input_b) && input.a,
		e: ($ui__input_a__OR__input_show || $ui__input_a__OR__input_b) && input.b,
		g: _write_if($scope0_reason, 4) && $input_a__closures,
		h: _write_if($scope0_reason, 5) && $input_b__closures
	}) || (_filled_guard($scope0_reason, 4) && $ui__input_b__OR__input_show && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "b5", "d"), _filled_guard($scope0_reason, 5) && $ui__input_a__OR__input_show && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 5)) && $cg__input_show && _patch_subscribers($scope0_id, "b6", "e"));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	let s = false;
	_set_scope_reason(9198 | $uf__input_x << 11);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: count,
		b: input.x,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(8696 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 9 | $uf__input_x << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		a: input.y,
		b: input.x,
		show: s
	});
	_patch_child_end();
	_html(`<button class=c>+</button>${_el_mark($scope0_id, "c")}<button class=s>s</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: count,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

// tags/keeper.marko
_shells({ c: "c !c1; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "c0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c1");
	$fg__input_content && _patch_render($scope0_id, "c0", "e");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
_shells({
	b3: "b3;b%;<!><!><!>",
	b4: "b4;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0), $wi__input = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id(), $ui__input = _unfilled_if($scope0_reason, 0), $ui__input_p = _unfilled_if($scope0_reason, 1), $fg__input_p = _filled_guard($scope0_reason, 1), $fg__input = _filled_guard($scope0_reason, 0);
		$fg__input_p && $ui__input && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 1));
		const { content: c } = x ? input : {};
		_dynamic_tag($scope1_id, "a", x ? keeper_default : "div", { content: c }, 1, 0, 0, $wg__input, $scope0_reason, 0);
		$ui__input_p && _patch_write($scope1_id, "wf", c, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b0");
		_patch_render($scope1_id, "b1", (($fg__input ? " >c" : "") + ($fg__input_p ? " c" : "")).slice(1), $scope0_reason, 0);
		_patch_render($scope1_id, "b2", (($fg__input_p ? " c" : "") + ($fg__input ? " f" : "")).slice(1), $scope0_reason, 0);
		$wi__input && _subscribe($ui__input && $input__closures, _scope($scope1_id, {
			c: $ui__input && x,
			f: ($ui__input_p || $ui__input) && c
		}), _client_guard($scope0_reason, 0) && "b0", $wg__input);
	}, 1, "b3", _unfilled_if($scope0_reason, 1), 1, 1);
	_scope($scope0_id, { e: $wi__input && _unfilled_if($scope0_reason, 0) && $input__closures });
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 4), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_p = _unfilled_if($scope0_reason, 0), $ui__input_p = _unfilled_if($scope0_reason, 3), $ui__input_on = _unfilled_if($scope0_reason, 2), $fg__input_note = _filled_guard($scope0_reason, 4), $fg__input_on = _filled_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a1", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_note && "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0, 0, void 0, 0, 0, "a0");
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "a2", "g");
	_patch_render($scope0_id, "a3", (($fg__input_on ? " d" : "") + ($fg__input_p ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_p || $ui__input_on__OR__input_p) && input.on,
		e: ($ui__input_on || $ui__input_on__OR__input_p) && input.p,
		g: ($ui__input_on__OR__input_p || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) || ($fg__input_on && $ui__input_p && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 2)), $fg__input_p && $ui__input_on && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("a0", $scope0_id) || $ui__input_on__OR__input_p) && _patch_write($scope0_id, "xg", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
